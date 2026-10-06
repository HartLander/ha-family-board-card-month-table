# Browser-Harness

Die Karte in einem echten Browser, gegen ein nachgebautes Home Assistant.

`npm test` deckt Logik (`events.ts`) und Verhalten (happy-dom) ab — aber **kein
Layout**: happy-dom rechnet keine Größen aus, `getBoundingClientRect()` liefert
dort Nullen. Fehler wie „das Ende-Feld ragt 75 px aus dem Dialog" oder „das
erste Stundenlabel wird vom Scrollrand halbiert" lassen sich deshalb nur hier
finden.

```bash
npm run build          # das Harness lädt dist/
npm run preview        # http://127.0.0.1:8931/tools/preview/
npm run check:browser  # Layout- und Barrierefreiheitsprüfungen
```

Dazu gehören Barrierefreiheits-Prüfungen mit axe-core (Struktur/ARIA in jeder
Ansicht, Kontrast der eigenen Texte, Tastatur-Bedienung).

`check:browser` läuft **nicht** in der CI: es braucht einen Browser (Chromium
über `playwright-core`, Pfad via `CHROMIUM_PATH`, Vorgabe
`/opt/pw-browsers/chromium`). Vor einer Release-Kandidatin lohnt ein Durchlauf.

## Parameter

`index.html` versteht `?view=now|day|timeline|week|month|month_table|agenda`, `?lang=de|en`,
`?dark=1` (Home-Assistant-Dark-Theme), `?alerts=1` (Tages-Check) und
`?noweather=1` (ohne Wetter-Entität; sonst liefert das Harness eine
10-Tage-Vorhersage ab heute).

`<ha-icon>` wird durch einen grauen Kreis in Icon-Größe ersetzt, damit Icons
im Layout so viel Platz einnehmen wie in Home Assistant.

Die Daten sind erfunden und die Namen generisch — die Screenshots im README
entstehen hier, es sollen keine echten Familiennamen hineingeraten.

## Paralleler Betrieb mit dem Original

Die optionalen Vergleichsprüfungen laden beide echten Bundles in beiden
Reihenfolgen und prüfen Rendering, Kartenwähler, Editor, neue Konfigurationen
und unabhängige Navigation. Das Original-Bundle muss lokal vorliegen:

```bash
git show 96ca7494d5d8798555c951f8545122b2923a3672:dist/ha-family-board-card.js > /tmp/ha-family-board-original.js
UPSTREAM_BUNDLE_PATH=/tmp/ha-family-board-original.js CHROMIUM_PATH=/pfad/zu/chromium npm run check:browser
```

Der angegebene Commit ist die unveränderte Upstream-Basis v0.30.0 dieses Forks.
Bei einem flachen Checkout stattdessen ein lokal gespeichertes Original-Bundle
übergeben. Ohne `UPSTREAM_BUNDLE_PATH` wird dieser zusätzliche Testblock
ausdrücklich übersprungen. Die Fixture wird nur im lokalen Testserver unter
`/__upstream__/ha-family-board-card.js` ausgeliefert und gehört nicht zum Release.
