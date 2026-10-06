/* ------------------------------------------------------------------ */
/*  Layout checks in a real browser. Everything in here is something   */
/*  happy-dom cannot see, because it does not do layout.               */
/* ------------------------------------------------------------------ */
import { chromium } from "playwright-core";
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("../..", import.meta.url));
const PORT = Number(process.env.PORT ?? 8931);
const EXEC = process.env.CHROMIUM_PATH ?? "/opt/pw-browsers/chromium";
const UPSTREAM_BUNDLE = process.env.UPSTREAM_BUNDLE_PATH;
const TYPES = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css" };

const server = createServer(async (req, res) => {
  const path = normalize(decodeURI((req.url ?? "/").split("?")[0])).replace(/^(\.\.[/\\])+/, "");
  const file = path === "/__upstream__/ha-family-board-card.js" && UPSTREAM_BUNDLE
    ? UPSTREAM_BUNDLE
    : join(ROOT, path.endsWith("/") ? `${path}tools/preview/index.html` : path);
  try {
    const body = await readFile(file);
    res.writeHead(200, { "content-type": TYPES[extname(file)] ?? "application/octet-stream" });
    res.end(body);
  } catch {
    res.writeHead(404).end("not found");
  }
});
await new Promise((ok) => server.listen(PORT, "127.0.0.1", ok));

const failures = [];
const check = (name, ok, detail = "") => {
  console.log(`${ok ? "  ok  " : " FAIL "} ${name}${detail ? ` — ${detail}` : ""}`);
  if (!ok) failures.push(name);
};

const browser = await chromium.launch({ executablePath: EXEC });

/** Open the harness with the clock pinned, so "now" is reproducible. */
async function open({
  view = "day",
  lang = "de",
  dark = false,
  width = 1400,
  height = 900,
  locale = "de-DE",
  slim = false,
  timezoneId,
  time,
  compare,
}) {
  const page = await browser.newPage({ viewport: { width, height }, locale, timezoneId });
  const errors = [];
  page.on("pageerror", (e) => errors.push(String(e)));
  const at = time ?? new Date();
  if (!time) at.setHours(10, 20, 0, 0);
  await page.clock.install({ time: at });
  const url = `http://127.0.0.1:${PORT}/tools/preview/index.html?view=${view}&lang=${lang}&alerts=1${dark ? "&dark=1" : ""}${slim ? "&slim=1" : ""}${compare ? `&compare=${compare}` : ""}`;
  await page.goto(url);
  await page.waitForTimeout(1500);
  return { page, errors };
}

/* --- the dialog must keep its fields inside, in every locale -------- */
for (const locale of ["de-DE", "en-US"]) {
  for (const width of [1400, 400]) {
    const { page, errors } = await open({ width, locale });
    await page.evaluate(() => {
      const root = document.querySelector("family-board-card-month-table").renderRoot;
      root.querySelector(".event").click();
    });
    await page.waitForTimeout(300);
    const overflow = await page.evaluate(() => {
      const d = document.querySelector("family-board-card-month-table").renderRoot.querySelector(".dialog");
      return d.scrollWidth - d.clientWidth;
    });
    check(`Dialog ohne Überlauf (${locale}, ${width}px)`, overflow <= 0, `${overflow}px`);
    check(`keine Konsolenfehler (${locale}, ${width}px)`, errors.length === 0, errors.join(" | "));
    await page.close();
  }
}

/* --- the timeline's outer hour labels must stay readable ------------ */
{
  const { page } = await open({ view: "timeline" });
  const labels = await page.evaluate(() => {
    const root = document.querySelector("family-board-card-month-table").renderRoot;
    const wrap = root.querySelector(".tlwrap").getBoundingClientRect();
    const hours = [...root.querySelectorAll(".tlhour")];
    const box = (n) => n.getBoundingClientRect();
    return {
      first: { text: hours[0].textContent.trim(), cut: box(hours[0]).left < wrap.left - 0.5 },
      last: {
        text: hours.at(-1).textContent.trim(),
        cut: box(hours.at(-1)).right > wrap.right + 0.5,
      },
    };
  });
  check(`erstes Stundenlabel vollständig (${labels.first.text})`, !labels.first.cut);
  check(`letztes Stundenlabel vollständig (${labels.last.text})`, !labels.last.cut);
  await page.close();
}

/* --- the agenda must land on today, not at the top of the week ------ */
{
  const { page } = await open({ view: "agenda", width: 560 });
  const landed = await page.evaluate(() => {
    const root = document.querySelector("family-board-card-month-table").renderRoot;
    const box = root.querySelector(".agenda");
    const today = box.querySelector(".agenda-date.today")?.closest(".agenda-day");
    if (!today) return { ok: false, why: "kein Heute-Abschnitt" };
    const offset =
      today.getBoundingClientRect().top - box.getBoundingClientRect().top + box.scrollTop;
    return { ok: Math.abs(box.scrollTop - offset) < 8, why: `scrollTop=${Math.round(box.scrollTop)} heute=${Math.round(offset)}` };
  });
  check("Agenda scrollt auf heute", landed.ok, landed.why);
  await page.close();
}

/* --- the slim header has to actually be slimmer --------------------- */
{
  const headerHeight = async (slim) => {
    const { page } = await open({ slim });
    const px = await page.evaluate(() => {
      const root = document.querySelector("family-board-card-month-table").renderRoot;
      const card = root.querySelector("ha-card") ?? root.firstElementChild;
      const board = root.querySelector(".board");
      return Math.round(board.getBoundingClientRect().top - card.getBoundingClientRect().top);
    });
    await page.close();
    return px;
  };
  const wide = await headerHeight(false);
  const slim = await headerHeight(true);
  check("schlanker Kopf spart Hoehe", slim < wide - 20, `${wide}px -> ${slim}px`);
}

/* --- the month grid across a daylight-saving change (#62) ----------- */
{
  // 2026-10-25 is the day the clocks go back in Europe: 25 hours long. Stepping
  // days by a flat 24 hours used to render that day twice and shift the rest of
  // the grid off its weekday column.
  const { page, errors } = await open({
    view: "month",
    timezoneId: "Europe/Paris",
    locale: "fr-FR",
    time: new Date("2026-10-15T10:00:00+02:00"),
  });
  const grid = await page.evaluate(() => {
    const root = document.querySelector("family-board-card-month-table").renderRoot;
    return [...root.querySelectorAll(".monthgrid > *")].map((cell) =>
      parseInt((cell.textContent ?? "").trim(), 10),
    );
  });
  const repeated = grid.filter((n, i) => i > 0 && n === grid[i - 1]);
  check(
    "Monatsraster ohne doppelten Tag (Zeitumstellung)",
    grid.length > 0 && repeated.length === 0,
    repeated.length ? `doppelt: ${repeated.join(", ")}` : `${grid.length} Zellen`,
  );
  check("keine Konsolenfehler (Monat, Zeitumstellung)", errors.length === 0, errors.join(" | "));
  await page.close();
}

/* --- optional full month: every row fits inside the card ------------ */
for (const [date, days, width, height] of [
  ["2026-10-06", 31, 1080, 1920],
  ["2026-04-06", 30, 1400, 900],
  ["2026-02-06", 28, 400, 900],
  ["2028-02-06", 29, 1080, 1920],
]) {
  const { page, errors } = await open({
    view: "month_table", width, height, dark: true, slim: true,
    timezoneId: "Europe/Berlin", time: new Date(`${date}T10:00:00+01:00`),
  });
  const setConfig = (patch) => page.evaluate(async (patch) => {
    const card = document.querySelector("family-board-card-month-table");
    card.setConfig({ ...card._config, ...patch });
    await card.updateComplete;
  }, patch);
  const measure = () => page.evaluate(() => {
    const card = document.querySelector("family-board-card-month-table");
    const wrap = card.renderRoot.querySelector(".weekwrap");
    const rows = [...wrap.querySelectorAll(".wday")];
    const bottom = wrap.getBoundingClientRect().top + wrap.clientHeight;
    return {
      days: rows.length,
      verticalOverflow: wrap.scrollHeight - wrap.clientHeight,
      lastRowInside: rows.at(-1).getBoundingClientRect().bottom <= bottom + 1,
      eventsInside: [...wrap.querySelectorAll(".wchip")].every(chip =>
        chip.getBoundingClientRect().bottom <= chip.parentElement.getBoundingClientRect().bottom + 1),
      horizontalOverflow: wrap.scrollWidth - wrap.clientWidth,
      outerOverflow: card.scrollWidth - card.clientWidth,
    };
  });
  const label = `${days} Tage, ${width}×${height}`;
  check(`Monat scrollt standardmäßig (${label})`, (await measure()).verticalOverflow > 0);
  await setConfig({ month_table_full_height: true });
  const full = await measure();
  check(`ganzer Monat ohne inneren Scrollbalken (${label})`,
    full.days === days && full.verticalOverflow <= 1 && full.lastRowInside && full.eventsInside,
    JSON.stringify(full));
  if (width === 400) {
    check("ganzer Monat behält horizontales Scrollen auf dem Handy",
      full.horizontalOverflow > 0 && full.outerOverflow <= 0);
  }
  if (date === "2026-10-06") {
    if (process.env.MONTH_TABLE_SCREENSHOT) {
      await page.screenshot({ path: process.env.MONTH_TABLE_SCREENSHOT, fullPage: true });
    }
    await setConfig({ show_weekends: false });
    const weekdays = await measure();
    check("ganzer Monat beachtet den Wochenendfilter",
      weekdays.days === 22 && weekdays.verticalOverflow <= 1 && weekdays.lastRowInside);
    await setConfig({ show_weekends: true });
  }
  await setConfig({ month_table_full_height: false });
  check(`Monats-Scrollansicht wieder einschaltbar (${label})`, (await measure()).verticalOverflow > 0);
  await setConfig({ view: "week", month_table_full_height: true });
  const weekHeight = await page.evaluate(() =>
    getComputedStyle(document.querySelector("family-board-card-month-table").renderRoot.querySelector(".weekwrap")).maxHeight);
  check(`Wochenansicht behält Höhenbegrenzung (${label})`, Math.abs(parseFloat(weekHeight) - height * 0.6) <= 1);
  check(`keine Konsolenfehler (Monatshöhe, ${label})`, errors.length === 0, errors.join(" | "));
  await page.close();
}

/* --- weather chips must fit their weekday / month cell -------------- */
for (const [view, sel, width] of [
  ["week", ".wday", 1400],
  ["week", ".wday", 400],
  ["month_table", ".wday", 1400],
  ["month_table", ".wday", 400],
  ["month", ".mcell", 1400],
  ["month", ".mcell", 400],
]) {
  const { page } = await open({ view, width });
  const fit = await page.evaluate((sel) => {
    const root = document.querySelector("family-board-card-month-table").renderRoot;
    const cells = [...root.querySelectorAll(sel)].filter((c) => c.querySelector(".wx"));
    const bad = cells.filter((c) => {
      const box = c.getBoundingClientRect();
      const wx = c.querySelector(".wx").getBoundingClientRect();
      return wx.right > box.right + 0.5 || wx.left < box.left - 0.5;
    });
    return { n: cells.length, bad: bad.length };
  }, sel);
  check(
    `Wetter passt in ${sel} (${view}, ${width}px)`,
    fit.n > 0 && fit.bad === 0,
    `${fit.n} Zellen mit Wetter, ${fit.bad} zu schmal`,
  );
  await page.close();
}

/* --- accessibility: axe-core over every view ------------------------ */
// Structure, roles, names and ARIA must be clean everywhere. Colour contrast
// is checked separately below: most of it comes from the user's HA theme and
// from past events that are faded on purpose (past_opacity).
const AXE = await readFile(join(ROOT, "node_modules/axe-core/axe.min.js"), "utf8");
const axe = (page, context, options) =>
  page.addScriptTag({ content: AXE }).then(() =>
    page.evaluate(
      async ([context, options]) => {
        const res = await window.axe.run(context ?? document.querySelector("family-board-card-month-table"), {
          resultTypes: ["violations"],
          ...options,
        });
        return res.violations.map((v) => `${v.id} ×${v.nodes.length}`);
      },
      [context, options],
    ),
  );
for (const [view, dark, dialog] of [
  ["now"],
  ["day"],
  ["timeline"],
  ["week"],
  ["month"],
  ["month_table"],
  ["agenda"],
  ["day", true],
  ["day", false, true],
]) {
  const { page } = await open({ view, dark });
  if (dialog) {
    await page.evaluate(() =>
      document.querySelector("family-board-card-month-table").renderRoot.querySelector(".event").click(),
    );
    await page.waitForTimeout(300);
  }
  const found = await axe(page, null, { rules: { "color-contrast": { enabled: false } } });
  const name = `${view}${dark ? " dunkel" : ""}${dialog ? " + Dialog" : ""}`;
  check(`axe: keine Barrierefreiheits-Fehler (${name})`, found.length === 0, found.join(", "));
  await page.close();
}

/* --- contrast of the card's own small texts on tinted event blocks --- */
for (const dark of [false, true]) {
  for (const [view, sel] of [
    ["day", ".event:not(.past) .etime"],
    ["week", ".wchip:not(.past) small"],
    ["month_table", ".wchip:not(.past) small"],
    ["now", ".nrow .nnext, .nrow .nuntil, .nrow .nstat"],
  ]) {
    const { page } = await open({ view, dark });
    const found = await axe(
      page,
      { include: [{ fromShadowDom: ["family-board-card-month-table", sel] }] },
      { runOnly: ["color-contrast"] },
    );
    check(
      `Kontrast ausreichend: ${sel} (${view}${dark ? ", dunkel" : ""})`,
      found.length === 0,
      found.join(", "),
    );
    await page.close();
  }
}

/* --- keyboard: tab lists, dialog focus and focus trap ---------------- */
{
  const { page } = await open({ view: "day" });
  const active = () =>
    page.evaluate(() => {
      const a = document.querySelector("family-board-card-month-table").renderRoot.activeElement;
      return a ? { tag: a.tagName, text: a.textContent.trim(), inDialog: !!a.closest(".dialog") } : {};
    });
  await page.keyboard.press("Tab");
  const first = await active();
  await page.keyboard.press("ArrowRight");
  await page.waitForTimeout(200);
  const moved = await active();
  check(
    "Pfeiltaste wechselt die Ansicht",
    first.text === "Tag" && moved.text === "Zeitstrahl",
    `${first.text} → ${moved.text}`,
  );
  // the whole tab list is a single Tab stop
  await page.keyboard.press("Tab");
  const after = await active();
  check("Ansichts-Tabs sind ein einziger Tab-Stopp", after.text !== "Woche", after.text);
  await page.keyboard.press("ArrowLeft"); // harmless outside a tab list
  await page.evaluate(() => {
    const el = document.querySelector("family-board-card-month-table");
    el._view = "day";
  });
  await page.waitForTimeout(800);
  await page.evaluate(() =>
    document.querySelector("family-board-card-month-table").renderRoot.querySelector(".event").focus(),
  );
  await page.keyboard.press("Enter");
  await page.waitForTimeout(300);
  check("Dialog bekommt den Fokus", (await active()).inDialog === true);
  let stayed = true;
  for (let i = 0; i < 12; i++) {
    await page.keyboard.press(i < 8 ? "Tab" : "Shift+Tab");
    if (!(await active()).inDialog) stayed = false;
  }
  check("Tab bleibt im Dialog", stayed);
  await page.keyboard.press("Escape");
  await page.waitForTimeout(300);
  const back = await active();
  check("Fokus kehrt nach Escape zum Termin zurück", back.tag === "DIV" && !back.inDialog, back.text);
  await page.close();
}

/* --- nothing may scroll sideways out of the card -------------------- */
for (const [view, width] of [["day", 400], ["agenda", 400], ["week", 400], ["month", 400], ["month_table", 400]]) {
  const { page } = await open({ view, width });
  const bleed = await page.evaluate(() => {
    const el = document.querySelector("family-board-card-month-table");
    return el.scrollWidth - el.clientWidth;
  });
  check(`${view} läuft bei ${width}px nicht seitlich aus`, bleed <= 0, `${bleed}px`);
  await page.close();
}

/* --- both real bundles must work together, in either load order ----- */
if (UPSTREAM_BUNDLE) {
  for (const compare of ["upstream-first", "fork-first"]) {
    const { page, errors } = await open({ view: "month_table", compare });
    const together = await page.evaluate(async (order) => {
      const original = document.querySelector("family-board-card");
      const fork = document.querySelector("family-board-card-month-table");
      const cards = order === "upstream-first" ? [original, fork] : [fork, original];
      const editors = [];
      for (const card of cards) {
        const editor = await card.constructor.getConfigElement();
        editor.hass = card.hass;
        editor.setConfig(card._config);
        document.body.appendChild(editor);
        await editor.updateComplete;
        editors.push({ tag: editor.localName, rendered: !!editor.shadowRoot?.querySelector("ha-form") });
        editor.remove();
      }
      const types = window.customCards.map(card => card.type);
      return {
        rendered: !!original.shadowRoot?.querySelector(".monthwrap") &&
          !!fork.shadowRoot?.querySelector(".month-table") && original.constructor !== fork.constructor,
        stubs: [original, fork].map(card => card.constructor.getStubConfig().type),
        picker: types.filter(type => type === "family-board-card").length === 1 &&
          types.filter(type => type === "family-board-card-month-table").length === 1,
        editors,
        month: original.shadowRoot.querySelector(".nav-now").textContent.trim(),
      };
    }, compare);
    check(`Original und Fork rendern gleichzeitig (${compare})`, together.rendered);
    check(`Neue Karten behalten ihren eigenen Typ (${compare})`,
      together.stubs.join(",") === "custom:family-board-card,custom:family-board-card-month-table");
    check(`Beide Einträge im Kartenwähler (${compare})`, together.picker);
    check(`Beide Editoren rendern unabhängig (${compare})`,
      together.editors.every(editor => editor.rendered) &&
      together.editors.map(editor => editor.tag).sort().join(",") ===
        "ha-family-board-card-editor,ha-family-board-card-month-table-editor");
    await page.locator("family-board-card-month-table").getByRole("button", { name: "Nächster Monat", exact: true }).click();
    await page.waitForTimeout(200);
    const months = await page.evaluate(() => ["family-board-card", "family-board-card-month-table"].map(tag =>
      document.querySelector(tag).shadowRoot.querySelector(".nav-now").textContent.trim()));
    check(`Navigation des Forks lässt Original unverändert (${compare})`,
      months[0] === together.month && months[1] !== together.month);
    check(`Keine Registrierungs- oder Laufzeitfehler (${compare})`, errors.length === 0, errors.join(" | "));
    await page.close();
  }
} else {
  console.log("  skip Paralleler Betrieb: UPSTREAM_BUNDLE_PATH auf das Original-Bundle setzen");
}

await browser.close();
server.close();
console.log(failures.length ? `\n${failures.length} Prüfung(en) fehlgeschlagen` : "\nalles in Ordnung");
process.exit(failures.length ? 1 : 0);
