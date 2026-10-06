# Family Board Card – Month Table

This is [HartLander's fork](https://github.com/HartLander/ha-family-board-card-month-table) of [Family Board Card by renespeaker](https://github.com/renespeaker/ha-family-board-card), based on upstream **v0.30.0**. We wanted a different monthly overview: all days of a calendar month as rows, with one column per person. This fork adds that layout as `month_table` and registers a separate card, `custom:family-board-card-month-table`. You can load both cards together and compare them using the same calendar configuration.

**Fork version: `0.30.0-month-table.4`.** Credit for the original card and its existing features belongs to renespeaker and the upstream contributors. The original [MIT license and copyright notice](LICENSE) are preserved. Please report fork-specific issues [in this repository](https://github.com/HartLander/ha-family-board-card-month-table/issues).

## Enable the month table

```yaml
type: custom:family-board-card-month-table
view: month_table
views: [day, week, month, month_table, agenda]
persons:
  - name: Anna
    calendar: calendar.anna
  - name: Ben
    calendar: calendar.ben
```

Keep your existing `persons:` entries. If you already set `views:`, include `month_table` in that list. For just the table, use `views: [month_table]`. The new view is opt-in; existing boards retain their current view selection.

The table has sticky person headers and a date column, month navigation, event dialogs, and event creation on writable calendars. `show_weekends: false` hides weekends; `hide_empty_persons: true` hides people without events in the selected month (if everyone is empty, all columns remain visible). Clicking a date opens the day view when enabled. [Detailed German setup guide](INSTALLATION.de.md).

To show the whole month without an internal vertical scrollbar, enable **Layout & size → Show the entire month in the month table**, or set `month_table_full_height: true`. The card grows to fit every row; on smaller screens the dashboard itself may still scroll. Horizontal scrolling remains available for many people. This option defaults to `false`, keeping the existing scrollable table and its sticky headers.

**Layout & size** also offers a **weekday and date on one line** switch, a compact person header (avatar beside name), and sliders for month-table font size, minimum row height, vertical padding and event spacing. These controls apply only to `month_table`. Rows still grow to show all events, and the date column widens for large text. A compact starting point for a wall display:

```yaml
month_table_inline_date: true
month_table_compact_header: true
month_table_font_size: 12
month_table_row_height: 24
month_table_row_padding: 1
month_table_event_gap: 1
```

The font slider scales dates, names, event text and times together. With this option unset, existing font/theme settings remain in effect. Combine these settings with `month_table_full_height: true` to show the complete month in a shorter card.

**English** · [Deutsch](README.de.md)

![Family Board Card – day view](docs/preview-day-en.png)

<details>
<summary><b>See the other views</b> (timeline, agenda)</summary>

**Timeline** – people as rows, time running horizontally:

![Family Board Card – timeline](docs/preview-timeline-en.png)

**Agenda** – chronological, grouped by day, jumps to today on load:

<img src="docs/preview-agenda-en.png" alt="Family Board Card – agenda" width="380">

</details>

A family calendar — a “who is where, when” board — for [Home Assistant](https://www.home-assistant.io/). People are columns across the top (with the avatar from their `person.*` entity), time runs down the left. The card shows at a glance which activities happen at the same time in different places — for up to 10 people.

- **Day view** – people as columns, a shared time axis, now line; **overlapping events** are placed side by side.
- **Week view** – weekdays as rows, people as columns, compact event chips.
- **Month table** – every day of the selected month as a row, people as columns, with sticky headers.
- **Month view** – classic month grid with colored events per person; clicking a day jumps into the day view.
- **Agenda / list view** – chronological list of events grouped by day; ideal on a phone.
- **Due tasks** – optionally the board shows open `todo.*` tasks that are due today or overdue as chips in the all-day row and in the agenda. Works with any todo integration (Apple Reminders, Todoist, Google Tasks, Bring!, local lists) and **needs no second card**; assign no lists and you will never notice the feature. Checking tasks off stays where the task lives.
- **Slim header** – `slim_header` moves the weekday buttons onto the navigation line and puts the avatar next to the name: about 40 px less header, more room for the day.
- **Can start on another day** – `day_offset` shifts the day and timeline views by N days (`1` = tomorrow). Meant for displays that should show the day ahead – an e-paper panel in the hallway, say.
- **Day check** – optional warning chips above the day and timeline views: one person booked twice, an unsupervised gap between two events (the pick-up!), or everyone out at the same time (“nobody home”). Windows that are already over disappear on their own.
- **“Now / next” bar** – optional highlight row above the views: per person, what is running right now (with a pulsing dot) or what is coming next (incl. countdown) – made for the wall tablet.
- **Now view** – a calm full-card glance for a wall tablet or a small display: large clock and date, and per person what is running right now (with progress), today's all-day events and what comes next (“in 25 min”, “16:30”, “Tomorrow 08:00”). Opt-in: add `now` to `views`, or set `view: now`. Combined with `auto_return` the tablet always falls back to it.
- **Accessible** – fully usable by keyboard (arrow keys in the tab lists, focus moves into the dialog and stays there until Esc), and screen readers announce events with title, time and person. Checked with axe-core in every view.
- **Auto icons** – optionally every event gets a matching emoji by keyword (doctor → 🩺, sport → 🏃, birthday → 🎂, school → 🎒 …); custom rules possible. Titles that already contain an emoji stay untouched.
- **Timeline view** – people as rows on the left, time running horizontally: events as bars on a timeline (Gantt style); overlapping events stack into sub-rows.
- **Pick your views** – choose in the editor which switchers (now/day/timeline/week/month/month_table/agenda) appear.
- **Week navigation** – page back and forth, a click on the date range jumps back to “today”.
- **Theme-aware** – picks up the colors and fonts of the active dashboard theme (uses HA CSS variables throughout).
- **Configurable** – 15/30/60 min grid, day window, weekend on/off, color by person or location, auto refresh.
- **Drag & drop** – in the day view, drag events to move them (time) and drag the bottom edge to change the duration; snaps to the time grid and writes straight back to the calendar – **only** for writable calendars and single events (no series).
- **Manage events** – create/edit/delete right in the card, **but only** for calendars that support it (Local Calendar, CalDAV …). Read-only calendars (e.g. ICS subscriptions) are detected automatically and shown read-only. Recurring events: choose **“this event only / this and following”**.
- **Several calendars per person** – e.g. work + private in one column (selectable in the editor).
- **Robust event logic** – all-day events (exclusive end), events across midnight and multi-day events are split onto the correct days; time zones are respected.
- **Multilingual & localized** – texts in English/German, weekday names and clock format (12/24 h) from the HA locale; relative days (“Today/Tomorrow”).
- **Everyday polish** – past events dimmed, coloring by calendar, open a location straight in the maps app, hide noisy events by pattern.
- **Live progress & countdown** – running events show a progress bar (can be turned off), upcoming ones show “in 20 min” in the agenda; updates every minute.
- **Weather** – daily forecast from a `weather.*` entity (HA location, not the event address): icon with high/low in the day, timeline and agenda headers, icon + high next to each weekday in the week view, icon in the month cells.
- **Busy days stay readable** – if more events overlap than `max_columns` allows, the extra columns are collapsed into a “+N” chip (click opens the agenda) instead of shrinking into unreadable slivers.
- **Long events as a background band** – long-running events (after-school care, “free play”) beyond a configurable length run as a subtle full-width band behind the column instead of squeezing the short events sideways. The real appointments get the full width.
- **Auto-fit height** – optionally the day view adapts to the available card height so that start–end hour are fully visible without scrolling (ideal for wall tablets / kiosk).
- **Fills the screen** – person columns grow with the card width (panel view / wide cards); with `full_height` the board reaches the bottom of the screen. Column width, axis width and spacing are configurable.
- **Tentative events** – events whose title matches a `tentative_patterns` pattern are drawn dashed and slightly translucent (opt-in; the calendar status is deliberately not evaluated).
- **Entity badges per person** – any entities (phone battery, sensors …) as small chips below the person header; a click opens the more-info dialog.
- **Kiosk mode** – optionally return to the start view and to “today” after X minutes of inactivity; larger touch targets on touch devices.
- **Visual editor 2.0** – no YAML at all: first-run wizard, one-click profiles (🖥️ wall tablet / 📱 phone / 🧩 default), expandable topic groups with helper texts, palette picker per person **and per calendar** (incl. label), fine-tuning sliders (font size, corner radius, opacity) – fields only appear when the matching view is active.
- **⚡ Zero-config start** – when added, the card detects all `person.*` entities and links matching calendars by name; you can re-run it any time via “✨ Detect automatically” in the editor.
- **Person toggle** – clicking a person header hides that person temporarily (the column collapses to the avatar); a second click brings it back. Works in every view.
- **Event clean-up** – allow list (`show_patterns`), title replacement (`replace_patterns`, `"search => replacement"`) and duplicate filter (`filter_duplicates`, the same event in several calendars only once).
- **Multi-day events** – segments show “(2/5)” so it is clear which day of the run this is.
- **Calendar mapping** – with `calendars:` every calendar gets a fixed color, its own label, an **mdi icon** in front of the title and optionally a different **title field**.
- **Title from another field** – school timetable feeds often put the subject into `description` while `summary` only says “Homeroom”: `title_field: description` finally shows “Maths” instead of the same text three times.
- **Free choice of map link** – `map_url` with the `{location}` placeholder (Google Maps, Apple Maps, OpenStreetMap …), the default stays Google Maps.
- **Compact mode** – one switch (`compact`) for smaller fonts and tighter spacing instead of adjusting three sliders.
- **People hidden on start** – `hidden: true` per person; the column starts collapsed and a click on the header brings it back.

> Status: **v0.30.0-month-table.4 – complete family day planning: 7 views, write access, auto layout (trim/fit/full height), background bands, badges, kiosk mode, mobile optimized, fully localized card *and* editor.**

## Installation

### Manual installation

Use `dist/ha-family-board-card-month-table.js` from this fork, or build it with `npm ci && npm run build`. Copy it to `/config/www/ha-family-board-card-month-table.js` and add this dashboard resource:

```yaml
url: /local/ha-family-board-card-month-table.js?v=0.30.0-month-table.4
type: module
```

**Keep the original resource:** this fork registers its own card and editor, so both resources can be loaded together. Original cards use `custom:family-board-card`; fork cards use `custom:family-board-card-month-table`. Reload the browser/frontend cache after adding the new resource.

**Upgrading from preview `.1`:** remove the old fork resource ending in `family-board-month-table.js` or `/ha-family-board-card-month-table/ha-family-board-card.js`, add the new resource above, and change only the fork cards to `type: custom:family-board-card-month-table`. Keep (or restore) the upstream resource `/hacsfiles/ha-family-board-card/ha-family-board-card.js`. The old `.1` fork bundle still occupies the original card's element name and must no longer be loaded.

### HACS custom repository

Use this fork as a **custom repository** alongside the upstream entry in the default store:

1. In HACS, open **Custom repositories** and add `https://github.com/HartLander/ha-family-board-card-month-table` with category **Dashboard** (called **Lovelace/plugin** in some versions).
2. Install **Family Board Card – Month Table**.
3. Verify that the dashboard resource is `/hacsfiles/ha-family-board-card-month-table/ha-family-board-card-month-table.js` with type `module`. Keep the original card's resource for parallel use.
4. Add `type: custom:family-board-card-month-table` with `view: month_table`.

For pre-release versions, enable beta/pre-release downloads in HACS. Maintainer release notes: [docs/HACS_STORE.md](docs/HACS_STORE.md).

## Configuration

```yaml
type: custom:family-board-card-month-table
title: Family board # optional, custom card title
view: day           # now | day | timeline | week | month | month_table | agenda
time_grid: 30       # 15 | 30 | 60
start_hour: 6
end_hour: 22
show_weekends: true
show_now_line: true
color_by: person      # person | location | calendar
hour_height: 64       # pixels per hour (40–96), day view
refresh_interval: 300 # seconds; 0 = off
persons:
  - name: Anna
    person: person.anna     # avatar (entity_picture) + live status
    calendar: calendar.anna # source of the events
    color: '#8B7CF6'        # optional, otherwise the default palette
  - name: Ben
    person: person.ben
    calendar:               # several calendars per person are possible
      - calendar.ben_work
      - calendar.ben_private
```

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `persons` | list | – | 1–10 people with `name`, `person`, `calendar` (string **or list**), optionally `color`, `badges` (entities as chips) and `hidden` (starts collapsed) |
| `persons[].tasks` | string/list | – | `todo.*` list(s) of this person; tasks due today and overdue ones appear as chips (day view + agenda). Without it the card queries no list at all |
| `hide_empty_persons` | boolean | `false` | Week/month table: hide people without events in the period |
| `show_alerts` | boolean | `false` | Day check above the day/timeline views: double bookings, care gaps and “nobody home” as chips |
| `gap_min` | number | `60` | How many minutes a gap between two of a person's events must reach to be flagged (0 = off) |
| `show_focus` | boolean | `false` | “Now / next” bar per person above the views |
| `drag_drop` | boolean | `true` | Move / resize events in the day view by dragging (writable single events only) |
| `auto_icons` | boolean | `false` | Prepend an emoji per event based on keywords |
| `icon_patterns` | list | – | Custom icon rules, e.g. `["Grandma => 👵"]` |
| `auto_return` | number | `0` | Kiosk: return to the start view / today after X minutes without a touch (0 = off) |
| `title` | string | – | Custom card title (default: localized “Family board”) |
| `view` | string | `day` | Start view: `now`, `day`, `timeline`, `week`, `month`, `month_table` or `agenda` |
| `views` | list | all except `now` and `month_table` (opt-in) | Which views appear in the switcher, e.g. `[now, day, agenda]` |
| `time_grid` | number | `30` | Time axis grid in minutes |
| `start_hour` | number | `6` | First visible hour |
| `end_hour` | number | `22` | Last visible hour |
| `show_weekends` | boolean | `true` | Show Sat/Sun |
| `show_now_line` | boolean | `true` | Current time as a line |
| `color_by` | string | `person` | Color by `person`, `location` or `calendar` |
| `dim_past` | boolean | `true` | Dim events that are already over |
| `hide_patterns` | list | – | Hide events whose title contains one of the patterns (e.g. `["Free", "Private"]`) |
| `show_patterns` | list | – | Allow list: only show events whose title contains one of the patterns |
| `replace_patterns` | list | – | Clean up titles: `"search => replacement"` (without `=>` the text is removed) |
| `hide_past` | boolean | `false` | Agenda: skip the days before today so the list starts at today (a week you paged back to still shows everything) |
| `filter_duplicates` | boolean | `false` | Show identical events (title + time) only once per person and in the agenda |
| `calendars` | map | – | Per calendar `color`, `label`, `icon` (mdi) and `title_field` (editable in the editor) |
| `compact` | boolean | `false` | Compact layout: smaller fonts and tighter spacing |
| `map_url` | string | Google | Template for the location link, `{location}` is substituted, e.g. `https://maps.apple.com/?q={location}` |
| `event_size` | number | – | Font size of the event titles in px (editor slider, sets `--fb-event-size`) |
| `radius` | number | – | Corner radius of the event blocks in px (sets `--fb-radius`) |
| `past_opacity` | number | – | Opacity of past events in % (sets `--fb-past-opacity`) |
| `show_progress` | boolean | `true` | Progress bar on the running event |
| `weather_entity` | string | – | `weather.*` entity for the daily forecast (HA location) |
| `show_weather` | boolean | `true`* | Show the weather in the views (*only takes effect when `weather_entity` is set) |
| `hour_height` | number | `64` | Height of one hour in px (40–96) – scales the day view (wall tablet); with `fit_height` this is the upper bound |
| `hour_width` | number | `96` | Timeline view: width of one hour in px (48–240) |
| `fit_height` | boolean | `false` | Shrink the day view automatically so that start–end hour are fully visible without scrolling (wall tablet / kiosk) |
| `month_table_full_height` | boolean | `false` | Expand `month_table` to show all rows without an internal vertical scrollbar; the dashboard may still scroll |
| `month_table_inline_date` | boolean | `false` | Put weekday and date on one line, e.g. `Mon 01.10.`; weather stays below |
| `month_table_compact_header` | boolean | `false` | Put the avatar beside the person's name for shorter column headers |
| `month_table_font_size` | number | unset (date: `12.5`) | Month-table base font size, 10–22 px; names, events and times scale with it. Overrides general event font size in this view only |
| `month_table_row_height` | number | `48` | Minimum cell content height, 16–96 px, plus padding; busy rows grow as needed |
| `month_table_row_padding` | number | `4` | Vertical padding, 0–12 px; also adjusts date and event-chip padding |
| `month_table_event_gap` | number | `3` | Vertical gap between event chips, 0–12 px |
| `full_height` | boolean | `false` | Stretch the board to the bottom of the screen (panel / wall tablet view); the default is a 58 % cap |
| `trim_hours` | boolean | `true` | Day view: cut away empty hours at the edges so the busy part of the day gets the full height (min. 6 h window; `start_hour`/`end_hour` stay the outer bounds) |
| `col_min_width` | number | `120` | Minimum width (px) per person column, below that the board scrolls horizontally; above it the columns grow with the card width |
| `background_hours` | number | `3` | Timed events from this length (hrs.) on are drawn as a subtle background band instead of a column; `0` = off |
| `max_columns` | number | `3` | Max. side-by-side columns per person/day; with more overlaps a “+N” chip appears (1–8) |
| `tentative_patterns` | list | – | Mark events with a matching title pattern as tentative (dashed / translucent) |
| `day_offset` | number | `0` | Day/timeline view starts N days off: `1` = tomorrow, `-1` = yesterday. The shift crosses the week boundary correctly and survives `auto_return` (for e-paper and info displays) |
| `slim_header` | boolean | `false` | Slim header: the weekday buttons move onto the navigation line and the avatar sits next to the name – saves about 40 px of height |
| `first_day` | string | `monday` | Week starts on `monday` or `sunday` |
| `scroll_to_now` | boolean | `true` | Scroll to “now” on load: the day view to the current time, the timeline horizontally to the now line, the agenda to today's section (or the next day with events when today has none) |
| `refresh_interval` | number | `300` | Auto refresh of the events in seconds (0 = off); additionally when the tablet wakes up |

Every `calendar.*` entity works – no matter whether `local_calendar` (local, no cloud), Google or CalDAV. Home Assistant delivers them all in the same shape.

## Styling (theme / card-mod)

The card picks up the theme's colors and fonts automatically. For fine-tuning there are additional CSS variables you can override in your **theme** or via **card-mod**:

| Token | Default | Effect |
|-------|---------|--------|
| `--fb-accent` | `--primary-color` | “Today” / accent color |
| `--fb-now-color` | `--error-color` | Now line & progress |
| `--fb-radius` | `7px` | Corners of the event blocks |
| `--fb-radius-sm` | `5px` | Corners of the chips |
| `--fb-avatar-size` | `34px` | Avatar size |
| `--fb-past-opacity` | `0.5` | Opacity of past events |
| `--fb-title-size` | `16px` | Card title |
| `--fb-name-size` | `13px` | Person names |
| `--fb-event-size` | `11.5px` | Event titles |
| `--fb-time-size` | `9.5px` | Times inside a block |
| `--fb-chip-size` | `10.5px` | Chip font size |
| `--fb-hourline` / `--fb-halfhour` / `--fb-row-shade` | – | Grid lines / row shading |
| `--fb-col-min` | `120px` | Minimum width of a person column |
| `--fb-axis-width` | `56px` | Width of the time axis on the left |
| `--fb-board-max-height` | `58vh` | Height cap of the day board (without `full_height`) |
| `--fb-event-pad` | `4px 7px` | Inner padding of the event blocks |
| `--fb-head-pad` | `10px 6px` | Inner padding of the person headers |

Example (card-mod):

```yaml
type: custom:family-board-card-month-table
card_mod:
  style: |
    :host {
      --fb-accent: #e91e63;
      --fb-event-size: 13px;
      --fb-radius: 12px;
      --fb-avatar-size: 40px;
    }
persons: …
```

## Goes well with

The [Family Task Card](https://github.com/renespeaker/ha-family-task-card) is the sister card for chores: points, rewards and a kid mode on the same `todo.*` lists, in the same person palette.

**Both cards stand entirely on their own.** Neither requires the other, they never talk to each other — each talks to Home Assistant. The task chips above work with any todo integration, with or without the Task Card. Use both and the same person gets the same colour on each, because both share one palette.

## Languages

The card and the visual editor ship with **English and German**. The language follows your Home Assistant user profile; everything not covered by a translation falls back to English. Dates, weekday names and the clock format (12/24 h) come from the HA locale via `Intl`, so they are correct in every language.

Want another language? Add a dictionary to [`src/localize.ts`](src/localize.ts) (card) and [`src/editor-i18n.ts`](src/editor-i18n.ts) (editor) — both are plain key/value objects, pull requests welcome.

## Development

```bash
npm install
npm run build        # builds dist/ha-family-board-card-month-table.js
npm run watch        # rebuild on change
npm run lint         # tsc --noEmit (typecheck)
npm test             # Vitest (event logic)
npm run format       # Prettier
```

Fast loop against a running HA instance: copy `dist/ha-family-board-card-month-table.js` to `config/www/` and hard-reload the page.

Testing happens on two levels:

- **Logic** – the error-prone parts (splitting across midnight, all-day exclusivity, time zones, overlap layout, conflict detection) live isolated in [`src/events.ts`](src/events.ts), covered by [`src/events.test.ts`](src/events.test.ts).
- **Card & editor** – [`src/card.test.ts`](src/card.test.ts) and [`src/editor.test.ts`](src/editor.test.ts) render the card against a stand-in Home Assistant (happy-dom) and check what actually ends up on screen: the day check, agenda grouping, filters, the person toggle and the bilingual card and editor.

`npm test` runs both, no browser required.

What that can never catch is **layout**: happy-dom computes no geometry. For that, [`tools/preview/`](tools/preview/) holds a harness that puts the card into a real Chromium against a stand-in Home Assistant — `npm run check:browser` uses it to check things like "does a dialog field stick out of the dialog", "is the first hour label clipped", "does the agenda scroll to today" and "does anything bleed sideways at 400px". It needs a browser and therefore does not run in CI, but it is worth a run before a release.

## Creating / editing / deleting events

In the day view, clicking an empty spot in a person's column opens the create dialog (the time is taken from the click position); clicking an event opens it for editing/deleting. Whether that is possible depends on the calendar: the card reads `supported_features` of the respective `calendar.*` entity and hides write actions when the calendar does not support them. Internally the WebSocket commands `calendar/event/create|update|delete` are used (the same ones the native HA calendar panel uses).

## Roadmap

- [x] Create/edit/delete events, only for writable calendars
- [x] Person editor in the visual config editor
- [x] Week navigation & side-by-side layout of overlapping events
- [x] i18n (EN/DE) + locale time format
- [x] Kiosk / wall tablet mode (`full_height`, `fit_height`, `auto_return`, touch targets)
- [x] Mobile layout (compact columns, swipeable)
- [x] Drag & drop to move events
- [x] Month table (`month_table`) with visual editor support
- [x] Localized visual editor (EN/DE)
- [x] Conflict detection (double bookings, pick-up gaps, “nobody home”)
- [x] Drag & drop in the timeline view

## License

[MIT](LICENSE). Original copyright © 2026 renespeaker. This fork retains the original copyright and permission notice; see the [upstream project](https://github.com/renespeaker/ha-family-board-card) for its history.
