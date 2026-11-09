/* ------------------------------------------------------------------ */
/*  i18n for the visual editor. Flat EN/DE dictionaries; EN is the     */
/*  fallback for every key that a translation does not provide.        */
/* ------------------------------------------------------------------ */

type Dict = Record<string, string>;

/** Field labels (`l_<option>`), helper texts (`h_<option>`) and UI strings. */
const EN: Dict = {
  l_month_table_weekend_line_width: "Weekends: line thickness",
  l_month_table_weekend_background_opacity: "Weekends: background opacity",
  l_month_table_marker_line_width: "Calendar markings: line thickness",
  l_month_table_marker_background_opacity: "Calendar markings: background opacity",
  h_month_table_weekend_line_width:
    "0–12 px. 0 hides the line. Defaults: left line 4 px, underline 3 px.",
  h_month_table_marker_line_width:
    "0–12 px. 0 hides the line. Defaults: left line 4 px, underline 3 px.",
  h_month_table_weekend_background_opacity:
    "0–100%. 0 adds no background; 100 uses the selected color fully. Default: 24%.",
  h_month_table_marker_background_opacity:
    "0–100%. 0 adds no background; 100 uses the selected color fully. Default: 24%.",
  l_month_table_weekend_style: "Weekend highlighting style",
  l_month_table_marker_style: "Calendar marking style",
  h_month_table_weekend_style: "Left line, background, both or underline. Default: background.",
  h_month_table_marker_style:
    "Default: left line and background. Full-row highlighting extends backgrounds and underlines; the left line stays at the date.",
  o_highlight_line: "Left line only",
  o_highlight_background: "Background only",
  o_highlight_both: "Left line and background",
  o_highlight_underline: "Underline",
  l_header_position: "Title and view buttons: position",
  l_navigation_position: "Month/week navigation: position",
  l_navigation_layout: "Navigation button arrangement",
  l_equal_view_buttons: "View buttons: all as wide as the longest label",
  l_controls_height: "Button minimum height",
  l_controls_font_size: "Button font size",
  l_navigation_arrow_width: "Navigation arrow minimum width",
  l_month_table_fill_height: "Month table: fill available screen height",
  l_month_table_saturday_color: "Month table: Saturday color",
  l_month_table_sunday_color: "Month table: Sunday color",
  l_month_table_weekend_full_row: "Weekend color across the entire day row",
  l_month_table_marker_full_row: "Marking calendar color across the entire day row",
  h_month_table_weekend_full_row:
    "Extends weekend backgrounds and underlines to person cells. Independent of calendar highlighting. Off by default.",
  h_month_table_marker_full_row:
    "Extends calendar backgrounds and underlines to person cells. Takes precedence over weekend row colors. Off by default.",
  l_month_table_marker_calendars: "Month table: calendars marking the date",
  l_month_table_marker_keep_columns: "Also show marking calendars in person columns",
  l_month_table_marker_mode: "Date marking: display style",
  l_month_table_marker_color: "Date marking: custom highlight color",
  l_month_table_marker_text_color: "Date marking: text color",
  l_month_table_marker_font_size: "Date marking: font size",
  l_month_table_marker_grow: "Allow marking text to increase row height",
  l_month_table_date_width: "Month table: minimum date column width",
  h_controls_height: "For touch screens, try 44 px. Empty keeps the existing size.",
  h_month_table_fill_height:
    "Stretches short months to the bottom of the screen; busy rows may need more space.",
  h_month_table_marker_calendars:
    "Any calendar, including ones not assigned to a person. Selected sources mark only the date field.",
  h_month_table_marker_keep_columns:
    "Off hides dedicated columns and those events from mixed-calendar columns in this view.",
  h_month_table_marker_color:
    "Empty uses the calendar mapping color, then the person color. First selected calendar wins on overlaps.",
  h_month_table_marker_grow:
    "Off: text uses spare row space and is clipped when needed; color and tooltip stay visible. On: rows grow to show all text.",
  h_month_table_date_width:
    "92–280 px, default 92 px. Adding calendars never widens the date column; larger date fonts still fit.",
  h_month_table_saturday_color: "Tint for Saturday date fields; calendar markings take precedence.",
  h_month_table_sunday_color: "Tint for Sunday date fields; calendar markings take precedence.",
  o_top: "Top",
  o_bottom: "Bottom",
  o_nav_compact: "Together",
  o_nav_spread: "Left arrow / centered date / right arrow",
  o_marker_text: "Text below the date",
  o_marker_chip: "Event chip below the date",
  o_marker_indicator: "Color indicator only",
  /* ---- field labels ---------------------------------------------- */
  l_title: "Card title",
  l_refresh_interval: "Auto refresh (sec., 0 = off)",
  l_view: "Default view",
  l_views: "Available views (switcher)",
  l_time_grid: "Time grid",
  l_start_hour: "Start hour",
  l_end_hour: "End hour",
  l_hour_height: "Height per hour",
  l_hour_width: "Timeline: width per hour",
  l_fit_height: "Auto-fit: squeeze the day so it fits without scrolling",
  l_full_height: "Full height: stretch to the bottom of the screen",
  l_month_table_full_height: "Show the entire month in the month table",
  l_month_table_inline_date: "Month table: weekday and date on one line",
  l_month_table_compact_header: "Month table: avatar beside name",
  l_month_table_font_size: "Month table: font size",
  l_month_table_row_height: "Month table: minimum row height",
  l_month_table_row_padding: "Month table: vertical padding",
  l_month_table_event_gap: "Month table: gap between events",
  l_trim_hours: "Hide empty hours at the edges",
  l_col_min_width: "Min. column width per person",
  l_background_hours: "Show long events as a background band from (hrs.)",
  l_max_columns: "Max. columns per day",
  l_first_day: "Week starts on",
  l_scroll_to_now: "Auto-scroll to now",
  l_day_offset: "Start on (days from today)",
  l_slim_header: "Slim header",
  l_color_by: "Color by",
  l_show_weekends: "Show weekend",
  l_show_now_line: "Now line",
  l_dim_past: "Dim past events",
  l_show_progress: "Show progress bar",
  l_hide_patterns: "Hide events",
  l_show_patterns: "Only show events matching",
  l_replace_patterns: "Replace titles",
  l_filter_duplicates: "Merge duplicate events",
  l_hide_past: "Agenda: hide days that are over",
  l_tentative_patterns: "Mark as tentative",
  l_auto_icons: "Auto icons by keyword",
  l_icon_patterns: "Custom icon rules",
  l_show_focus: "“Now / next” bar",
  l_show_alerts: "Day check (double bookings, gaps, nobody home)",
  l_gap_min: "Flag a gap from (min., 0 = off)",
  l_drag_drop: "Move events by dragging (day view)",
  l_family_calendars: "Family calendars",
  l_weather_entity: "Weather entity",
  l_show_weather: "Show weather",
  l_hide_empty_persons: "Week/month table: hide persons without events",
  l_auto_return: "Return to the start view after idle (min., 0 = off)",
  l_event_size: "Event font size",
  l_radius: "Corner radius of the blocks",
  l_past_opacity: "Opacity of past events",
  l_name: "Display name",
  l_person: "Person (avatar & status)",
  l_calendar: "Calendars (multiple possible)",
  l_tasks: "Task lists (due items appear on the board)",
  l_color: "Custom color (hex, optional)",
  l_badges: "Badges (e.g. battery, sensors)",
  l_hidden: "Hidden on start",
  l_compact: "Compact layout",
  l_map_url: "Map link (template)",

  /* ---- helper texts ---------------------------------------------- */
  h_scroll_to_now: "Day view to the current time, timeline to the now line, agenda to today",
  h_day_offset:
    "0 = today, 1 = tomorrow, -1 = yesterday. For a display that should show the day ahead",
  h_slim_header:
    "Weekday buttons move up onto the navigation line and the avatar sits next to the name - saves about 40 px",
  h_hide_patterns: "Text patterns, e.g. “Recess” – matches are hidden",
  h_show_patterns: "Allow list: only events whose title contains one of the patterns",
  h_replace_patterns: "e.g. “Homeroom => Lesson” (without => the text is removed)",
  h_tentative_patterns: "Matches are drawn dashed / translucent",
  h_filter_duplicates: "The same event in several calendars is shown only once",
  h_hide_past: "The list starts at today. Paging back to an earlier week still shows everything",
  h_auto_return: "Kiosk: jumps back to “today” after X minutes without a touch",
  h_background_hours: "0 = off. Long all-day-ish events (after-school care …) as a subtle band",
  h_fit_height: "Compresses the day until everything is visible without scrolling",
  h_full_height: "For panel view / wall tablet",
  h_month_table_full_height:
    "Expands the month table to show all rows without an internal vertical scrollbar. The dashboard may still scroll on smaller screens.",
  h_month_table_inline_date: "e.g. Mon 01.10. Weather stays below; the date column grows if needed",
  h_month_table_compact_header: "Shorter person headers with the avatar and name side by side",
  h_month_table_font_size:
    "Base size for dates and names; event text and times scale with it. Empty keeps existing font settings (dates: 12.5 px)",
  h_month_table_row_height:
    "Minimum content height, plus padding. Rows with many events grow as needed. Default: 48 px",
  h_month_table_row_padding:
    "Less padding makes date rows and event chips more compact. Default: 4 px",
  h_month_table_event_gap: "Vertical space between events in a cell. Default: 3 px",
  h_trim_hours: "Shows only the hours that actually contain events",
  h_col_min_width: "Below this the board scrolls horizontally",
  h_family_calendars:
    "Calendars for everyone – holidays, bin collection, school holidays. Shown above the people, never counted as a double booking",
  h_weather_entity: "Daily forecast in the header (HA location)",
  h_auto_icons: "e.g. doctor → 🩺, sport → 🏃, birthday → 🎂 (titles with emoji stay untouched)",
  h_icon_patterns: "Own rules, e.g. “Grandma => 👵”",
  h_show_focus: "Compact bar above the views: what is running now / coming next",
  h_show_alerts:
    "Chips above the day and timeline views: one person booked twice, an unsupervised window between two events, or everyone out at the same time",
  h_gap_min:
    "How long a hole between two of a person's events has to be before it is worth a warning",
  h_drag_drop: "Writable calendars only; drag to move, bottom edge changes the duration",
  h_views: "Which switchers appear at the top",
  h_tasks:
    "Open tasks due today - and overdue ones - show up as chips. Checking them off stays with your todo app or the Family Task Card",
  h_badges: "Small chips below the person header; click opens details",
  h_color: "Leave empty for the palette color",
  h_hidden: "Column starts collapsed; a click on the header brings it back",
  h_compact: "Smaller fonts and tighter spacing in a single switch",
  h_map_url: "{location} is substituted, e.g. https://maps.apple.com/?q={location}",

  /* ---- option labels --------------------------------------------- */
  o_person: "Person",
  o_location: "Location",
  o_calendar: "Calendar",
  o_monday: "Monday",
  o_sunday: "Sunday",

  /* ---- group titles ---------------------------------------------- */
  g_views: "🗓️ Views",
  g_layout: "📐 Layout & size",
  g_filters: "🧹 Filters & clean-up",
  g_looks: "🎨 Appearance (fine-tuning)",
  g_kiosk: "🖥️ Kiosk & extras",

  /* ---- wizard ----------------------------------------------------- */
  w_title: "👨‍👩‍👧‍👦 Welcome to the family board!",
  w_text:
    "Ready in two clicks – the card detects your family automatically from the person and calendar entities of your Home Assistant.",
  w_detect: "✨ Step 1: detect persons automatically",
  w_hint:
    "Optionally afterwards: pick a profile (below) or fine-tune the settings in the groups. Of course you can also add persons by hand:",
  w_empty: "＋ Start empty",

  /* ---- presets ---------------------------------------------------- */
  p_tablet: "🖥️ Wall tablet",
  p_tablet_title: "Full screen, auto-fit, return to today",
  p_phone: "📱 Phone",
  p_phone_title: "Agenda as start view, compact columns",
  p_reset: "🧩 Default",
  p_reset_title: "Reset the layout settings",

  /* ---- sections & controls ---------------------------------------- */
  s_persons: "People",
  s_calendars: "Calendars (color & label)",
  s_settings: "Settings",
  b_add_person: "＋ Add person",
  b_detect: "✨ Detect automatically",
  b_up: "Move up",
  b_down: "Move down",
  b_remove: "Remove",
  b_auto: "Automatic",
  ph_label: "Custom label",
  ph_icon: "Icon, e.g. mdi:school",
  ph_title_field: "Title from field (e.g. description)",
  person_n: "Person",
  cal_hint_1:
    "Colors apply with “Color by: calendar”, labels in the event dialog. Icon = mdi icon in front of the title. “Title from field” uses e.g.",
  cal_hint_2: "instead of",
  cal_hint_3: "as the event title.",
};

const DE: Dict = {
  l_month_table_weekend_line_width: "Wochenenden: Linienstärke",
  l_month_table_weekend_background_opacity: "Wochenenden: Hintergrund-Deckkraft",
  l_month_table_marker_line_width: "Kalender-Markierungen: Linienstärke",
  l_month_table_marker_background_opacity: "Kalender-Markierungen: Hintergrund-Deckkraft",
  h_month_table_weekend_line_width:
    "0–12 px. 0 blendet die Linie aus. Standard: links 4 px, unten 3 px.",
  h_month_table_marker_line_width:
    "0–12 px. 0 blendet die Linie aus. Standard: links 4 px, unten 3 px.",
  h_month_table_weekend_background_opacity:
    "0–100 %. 0 fügt keinen Hintergrund hinzu; 100 verwendet die Farbe vollständig. Standard: 24 %.",
  h_month_table_marker_background_opacity:
    "0–100 %. 0 fügt keinen Hintergrund hinzu; 100 verwendet die Farbe vollständig. Standard: 24 %.",
  l_month_table_weekend_style: "Stil der Wochenend-Markierung",
  l_month_table_marker_style: "Stil der Kalender-Markierung",
  h_month_table_weekend_style:
    "Linie links, Hintergrund, beides oder Linie unten. Standard: Hintergrund.",
  h_month_table_marker_style:
    "Standard: Linie links und Hintergrund. Die Zeilenoption erweitert Hintergründe und untere Linien; die linke Linie bleibt am Datum.",
  o_highlight_line: "Nur Linie links",
  o_highlight_background: "Nur Hintergrund",
  o_highlight_both: "Linie links und Hintergrund",
  o_highlight_underline: "Linie unten",
  l_header_position: "Titel und Ansichtswechsel: Position",
  l_navigation_position: "Monats-/Wochennavigation: Position",
  l_navigation_layout: "Anordnung der Navigationsknöpfe",
  l_equal_view_buttons: "Ansichtstasten: alle so breit wie die längste Beschriftung",
  l_controls_height: "Mindesthöhe der Schaltflächen",
  l_controls_font_size: "Schriftgröße der Schaltflächen",
  l_navigation_arrow_width: "Mindestbreite der Navigationspfeile",
  l_month_table_fill_height: "Monatstabelle: verfügbare Bildschirmhöhe ausfüllen",
  l_month_table_saturday_color: "Monatstabelle: Samstagsfarbe",
  l_month_table_sunday_color: "Monatstabelle: Sonntagsfarbe",
  l_month_table_weekend_full_row: "Wochenendfarbe über die gesamte Tageszeile",
  l_month_table_marker_full_row: "Farbe des Markierungskalenders über die gesamte Tageszeile",
  h_month_table_weekend_full_row:
    "Erweitert Wochenend-Hintergründe und untere Linien auf die Personenzellen. Unabhängig von Kalender-Markierungen. Standardmäßig aus.",
  h_month_table_marker_full_row:
    "Erweitert Kalender-Hintergründe und untere Linien auf die Personenzellen. Hat Vorrang vor Wochenend-Zeilenfarben. Standardmäßig aus.",
  l_month_table_marker_calendars: "Monatstabelle: Kalender als Datumsmarkierungen",
  l_month_table_marker_keep_columns: "Markierungskalender zusätzlich in Personenspalten anzeigen",
  l_month_table_marker_mode: "Datumsmarkierung: Darstellungsart",
  l_month_table_marker_color: "Datumsmarkierung: eigene Markierungsfarbe",
  l_month_table_marker_text_color: "Datumsmarkierung: Textfarbe",
  l_month_table_marker_font_size: "Datumsmarkierung: Schriftgröße",
  l_month_table_marker_grow: "Zeilen für Markierungstext vergrößern",
  l_month_table_date_width: "Monatstabelle: Mindestbreite der Datumsspalte",
  h_controls_height: "Für Touchscreens z. B. 44 px. Leer behält die bisherige Größe bei.",
  h_month_table_fill_height:
    "Streckt kurze Tabellen bis zum Bildschirmende; volle Zeilen dürfen mehr Platz benötigen.",
  h_month_table_marker_calendars:
    "Beliebige Kalender, auch ohne Personenzuordnung. Markiert wird nur das Datumsfeld.",
  h_month_table_marker_keep_columns:
    "Aus blendet reine Markierungsspalten und deren Termine in gemischten Personenspalten in dieser Ansicht aus.",
  h_month_table_marker_color:
    "Leer verwendet die Kalenderfarbe, danach die Personenfarbe. Bei Überschneidungen hat der zuerst ausgewählte Kalender Vorrang.",
  h_month_table_marker_grow:
    "Aus: Text nutzt freien Zeilenplatz und wird bei Platzmangel gekürzt; Farbe und Tooltip bleiben sichtbar. An: Zeilen wachsen für den Text mit.",
  h_month_table_date_width:
    "92–280 px, Standard 92 px. Kalender verbreitern die Spalte nicht automatisch; größere Datumsschrift passt weiterhin hinein.",
  h_month_table_saturday_color:
    "Tönung der Datumsfelder am Samstag; Kalender-Markierungen haben Vorrang.",
  h_month_table_sunday_color:
    "Tönung der Datumsfelder am Sonntag; Kalender-Markierungen haben Vorrang.",
  o_top: "Oben",
  o_bottom: "Unten",
  o_nav_compact: "Zusammen",
  o_nav_spread: "Pfeil links / Datum mittig / Pfeil rechts",
  o_marker_text: "Text unter dem Datum",
  o_marker_chip: "Terminblock unter dem Datum",
  o_marker_indicator: "Nur Farbhinweis",
  l_title: "Kartentitel",
  l_refresh_interval: "Auto-Aktualisierung (Sek., 0 = aus)",
  l_view: "Standardansicht",
  l_views: "Verfügbare Ansichten (Umschalter)",
  l_time_grid: "Zeitraster",
  l_start_hour: "Startstunde",
  l_end_hour: "Endstunde",
  l_hour_height: "Höhe pro Stunde",
  l_hour_width: "Zeitstrahl: Breite pro Stunde",
  l_fit_height: "Auto-Fit: Tag ohne Scrollen einpassen",
  l_full_height: "Volle Höhe: bis zum unteren Bildschirmrand",
  l_month_table_full_height: "In Monatsübersicht ganzen Monat anzeigen",
  l_month_table_inline_date: "Monatstabelle: Wochentag und Datum in einer Zeile",
  l_month_table_compact_header: "Monatstabelle: Avatar neben dem Namen",
  l_month_table_font_size: "Monatstabelle: Schriftgröße",
  l_month_table_row_height: "Monatstabelle: Mindesthöhe der Zeilen",
  l_month_table_row_padding: "Monatstabelle: Vertikaler Innenabstand",
  l_month_table_event_gap: "Monatstabelle: Abstand zwischen Terminen",
  l_trim_hours: "Leere Randstunden automatisch ausblenden",
  l_col_min_width: "Min. Spaltenbreite pro Person",
  l_background_hours: "Lange Termine als Hintergrund-Band ab (Std.)",
  l_max_columns: "Max. Spalten pro Tag",
  l_first_day: "Wochenstart",
  l_scroll_to_now: "Auto-Scroll zu jetzt",
  l_day_offset: "Beginnt bei (Tage ab heute)",
  l_slim_header: "Schlanker Kopfbereich",
  l_color_by: "Einfärben nach",
  l_show_weekends: "Wochenende anzeigen",
  l_show_now_line: "Jetzt-Linie",
  l_dim_past: "Vergangene Termine ausgrauen",
  l_show_progress: "Fortschrittsbalken anzeigen",
  l_hide_patterns: "Termine ausblenden",
  l_show_patterns: "Nur Termine zeigen mit",
  l_replace_patterns: "Titel ersetzen",
  l_filter_duplicates: "Doppelte Termine zusammenfassen",
  l_hide_past: "Agenda: vergangene Tage ausblenden",
  l_tentative_patterns: "Als vorläufig markieren",
  l_auto_icons: "Auto-Symbole nach Stichwort",
  l_icon_patterns: "Eigene Symbol-Regeln",
  l_show_focus: "„Jetzt / als Nächstes“-Leiste",
  l_show_alerts: "Tages-Check (Doppelbuchung, Lücken, niemand zuhause)",
  l_gap_min: "Lücke melden ab (Min., 0 = aus)",
  l_drag_drop: "Termine per Ziehen verschieben (Tagesansicht)",
  l_family_calendars: "Familien-Kalender",
  l_weather_entity: "Wetter-Entität",
  l_show_weather: "Wetter anzeigen",
  l_hide_empty_persons: "Woche/Monatstabelle: Personen ohne Termine ausblenden",
  l_auto_return: "Nach Inaktivität zur Startansicht (Min., 0 = aus)",
  l_event_size: "Schriftgröße Termine",
  l_radius: "Ecken-Radius der Blöcke",
  l_past_opacity: "Deckkraft vergangener Termine",
  l_name: "Anzeigename",
  l_person: "Person (Avatar & Status)",
  l_calendar: "Kalender (mehrere möglich)",
  l_tasks: "Aufgabenlisten (Fälliges erscheint im Board)",
  l_color: "Eigene Farbe (Hex, optional)",
  l_badges: "Badges (z. B. Akku, Sensoren)",
  l_hidden: "Beim Start ausgeblendet",
  l_compact: "Kompakte Darstellung",
  l_map_url: "Karten-Link (Vorlage)",

  h_scroll_to_now: "Tag zur aktuellen Uhrzeit, Zeitstrahl zur Jetzt-Linie, Agenda zu heute",
  h_day_offset:
    "0 = heute, 1 = morgen, -1 = gestern. Für Anzeigen, die den kommenden Tag zeigen sollen",
  h_slim_header:
    "Wochentage rutschen auf die Navigationszeile und der Avatar neben den Namen – spart rund 40 px",
  h_hide_patterns: "Textmuster, z. B. „Hofpause“ – Treffer werden ausgeblendet",
  h_show_patterns: "Allow-Liste: nur Termine, deren Titel eines der Muster enthält",
  h_replace_patterns: "z. B. „Klassenverbund => Unterricht“ (ohne => wird der Text entfernt)",
  h_tentative_patterns: "Treffer werden gestrichelt/transparent dargestellt",
  h_filter_duplicates: "Gleicher Termin in mehreren Kalendern nur einmal",
  h_hide_past:
    "Die Liste beginnt bei heute. Blätterst du in eine frühere Woche, siehst du weiterhin alles",
  h_auto_return: "Kiosk: springt nach X Minuten ohne Berührung zurück zu „heute“",
  h_background_hours: "0 = aus. Lange Dauertermine (OGS, Betreuung …) als dezentes Band",
  h_fit_height: "Staucht den Tag, bis alles ohne Scrollen sichtbar ist",
  h_full_height: "Für Panel-Ansicht / Wandtablet",
  h_month_table_full_height:
    "Zeigt alle Zeilen der Monatstabelle ohne internen vertikalen Scrollbalken. Auf kleineren Bildschirmen kann das Dashboard weiterhin scrollen.",
  h_month_table_inline_date:
    "Z. B. Mo 01.10. Wetter bleibt darunter; die Datumsspalte wächst bei Bedarf mit",
  h_month_table_compact_header: "Flachere Personenüberschriften mit Avatar und Name nebeneinander",
  h_month_table_font_size:
    "Grundgröße für Datum und Namen; Termine und Uhrzeiten skalieren mit. Leer behält vorhandene Schriftgrößen bei (Datum: 12,5 px)",
  h_month_table_row_height:
    "Mindesthöhe des Inhalts, zuzüglich Innenabstand. Bei vielen Terminen wächst die Zeile mit. Standard: 48 px",
  h_month_table_row_padding:
    "Weniger Innenabstand macht Datumszeilen und Terminblöcke kompakter. Standard: 4 px",
  h_month_table_event_gap: "Vertikaler Abstand zwischen Terminen in einer Zelle. Standard: 3 px",
  h_trim_hours: "Zeigt nur die Stunden, in denen wirklich Termine liegen",
  h_col_min_width: "Darunter wird horizontal gescrollt",
  h_family_calendars:
    "Kalender für alle – Feiertage, Müllabfuhr, Schulferien. Erscheinen über den Personen und zählen nie als Doppelbuchung",
  h_weather_entity: "Tages-Vorhersage im Kopf (HA-Standort)",
  h_auto_icons: "z. B. Arzt → 🩺, Sport → 🏃, Geburtstag → 🎂 (Titel mit Emoji bleiben unberührt)",
  h_icon_patterns: "eigene Regeln, z. B. „Oma => 👵“",
  h_show_focus: "Kompakte Leiste über den Ansichten: was läuft jetzt / kommt als Nächstes",
  h_show_alerts:
    "Chips über Tages- und Zeitstrahl-Ansicht: eine Person doppelt verplant, eine unbetreute Lücke zwischen zwei Terminen oder alle gleichzeitig unterwegs",
  h_gap_min: "Ab welcher Länge ein Loch zwischen zwei Terminen einer Person eine Warnung wert ist",
  h_drag_drop: "Nur bei schreibbaren Kalendern; Ziehen verschiebt, unterer Rand ändert die Dauer",
  h_views: "Welche Umschalter oben erscheinen",
  h_tasks:
    "Heute fällige und überfällige Aufgaben erscheinen als Chips. Abhaken bleibt bei deiner To-do-App bzw. der Family Task Card",
  h_badges: "Kleine Chips unter dem Personenkopf; Klick öffnet Details",
  h_color: "Leer lassen für Palettenfarbe",
  h_hidden: "Spalte startet eingeklappt; ein Klick auf den Kopf holt sie zurück",
  h_compact: "Kleinere Schriften und engere Abstände in einem Schalter",
  h_map_url: "{location} wird ersetzt, z. B. https://maps.apple.com/?q={location}",

  o_person: "Person",
  o_location: "Ort",
  o_calendar: "Kalender",
  o_monday: "Montag",
  o_sunday: "Sonntag",

  g_views: "🗓️ Ansichten",
  g_layout: "📐 Layout & Größe",
  g_filters: "🧹 Filter & Aufräumen",
  g_looks: "🎨 Aussehen (Feintuning)",
  g_kiosk: "🖥️ Kiosk & Extras",

  w_title: "👨‍👩‍👧‍👦 Willkommen beim Familienplan!",
  w_text:
    "In zwei Klicks startklar – die Karte erkennt deine Familie automatisch aus den Personen- und Kalender-Entitäten deines Home Assistant.",
  w_detect: "✨ Schritt 1: Personen automatisch erkennen",
  w_hint:
    "Danach optional: Profil wählen (unten) oder Feinheiten in den Gruppen einstellen. Natürlich kannst du Personen auch von Hand anlegen:",
  w_empty: "＋ Leer starten",

  p_tablet: "🖥️ Wandtablet",
  p_tablet_title: "Vollbild, Auto-Fit, Rückkehr zu heute",
  p_phone: "📱 Handy",
  p_phone_title: "Agenda als Startansicht, kompakte Spalten",
  p_reset: "🧩 Standard",
  p_reset_title: "Layout-Einstellungen zurücksetzen",

  s_persons: "Personen",
  s_calendars: "Kalender (Farbe & Label)",
  s_settings: "Einstellungen",
  b_add_person: "＋ Person hinzufügen",
  b_detect: "✨ Automatisch erkennen",
  b_up: "Nach oben",
  b_down: "Nach unten",
  b_remove: "Entfernen",
  b_auto: "Automatisch",
  ph_label: "Eigenes Label",
  ph_icon: "Symbol, z. B. mdi:school",
  ph_title_field: "Titel aus Feld (z. B. description)",
  person_n: "Person",
  cal_hint_1:
    "Farben wirken bei „Einfärben nach: Kalender“, Labels im Termin-Dialog. Symbol = mdi-Icon vor dem Titel. „Titel aus Feld“ nutzt z. B.",
  cal_hint_2: "statt",
  cal_hint_3: "als Termin-Titel.",
};

const TABLE: Record<string, Dict> = { en: EN, de: DE };

/** Translate an editor key for the given two-letter language, EN as fallback. */
export function et(lang: string, key: string): string {
  return TABLE[lang]?.[key] ?? EN[key] ?? key;
}
