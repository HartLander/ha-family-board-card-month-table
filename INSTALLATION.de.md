# Family Board Card mit Monatstabelle

Dieser Fork von [renespeaker/ha-family-board-card](https://github.com/renespeaker/ha-family-board-card) basiert auf Upstream-Version 0.30.0.
Version des Forks: **0.30.0-month-table.1**.

## Neue Ansicht

`month_table` zeigt die Personen bzw. zugeordneten Kalender oben als Spalten
und sämtliche Tage des gewählten Monats von oben nach unten als Zeilen.
Jede Zeile enthält Wochentag und Datum. Personenüberschriften und Datumsspalte
bleiben beim Scrollen sichtbar. Der Monatsname und die Pfeile dienen zur
Navigation; ein Klick auf den Monatsnamen führt zum aktuellen Monat zurück.

- Ein Klick auf einen Termin öffnet den vorhandenen Termin-Dialog.
- Ein Klick auf das Datum öffnet die Tagesansicht, wenn `day` aktiviert ist.
- Leere Zellen öffnen bei einem beschreibbaren Kalender den Anlegen-Dialog
  für genau dieses Datum. Das erfordert die entsprechenden Kalenderfunktionen.
- `show_weekends: false` blendet Samstag und Sonntag aus.
- `hide_empty_persons: true` blendet Personen ohne Termine im gesamten Monat
  aus. Sind alle leer, bleiben wie in der Wochenansicht alle Spalten sichtbar.
- Ein Klick auf die Personenüberschrift schaltet deren Termine aus oder ein.

Die klassische Ansicht `month` bleibt verfügbar. Bestehende Konfigurationen
behalten ihre bisherige Auswahl. Die Monatstabelle ist auch im Editor auswählbar.

## Installation einer separaten Testdatei

1. Entpacke dieses ZIP. Die fertige Datei liegt unter
   **`dist/ha-family-board-card.js`**. Du musst sie nicht selbst kompilieren.
2. Kopiere sie nach **`/config/www/family-board-month-table.js`** auf deinem
   Home-Assistant-System. Lege `www` an, falls es noch nicht existiert.
3. Sichere den bisherigen Ressourcen-Eintrag der Originalkarte. Ersetze ihn
   in den Dashboard-Ressourcen durch:

   ```yaml
   url: /local/family-board-month-table.js?v=0.30.0-month-table.1
   type: module
   ```

   Im Ressourcen-Dialog entspricht das dem Typ **JavaScript-Modul**.
   Die Originalkarte wird bei einer HACS-Installation üblicherweise über
   `/hacsfiles/ha-family-board-card/ha-family-board-card.js` geladen.

   **Es darf nur eine der beiden Versionen als Ressource geladen werden:**
   Beide registrieren `custom:family-board-card`. Zwei gleichzeitig geladene
   Versionen können die neue Ansicht verhindern oder Registrierungsfehler auslösen.
   Du musst die vorhandene HACS-Datei dafür nicht überschreiben.
4. Lade den Home-Assistant-Browser vollständig neu. Bei Bedarf Browsercache
   bzw. Frontendcache der Companion-App aktualisieren. Die Browserkonsole
   zeigt bei erfolgreichem Laden `v0.30.0-month-table.1`.
5. Ergänze in deiner vorhandenen Kartenkonfiguration:

   ```yaml
   view: month_table
   views:
     - day
     - week
     - month
     - month_table
     - agenda
   ```

   Deine bisherigen `persons:`-Einträge bleiben erhalten. Wenn du bereits
   eine `views:`-Liste verwendest, muss `month_table` darin enthalten sein.

## Vollständiges Beispiel

Ersetze die Kalender-Entitäten durch die tatsächlichen Namen deiner Kalender.

```yaml
type: custom:family-board-card
title: Familienplaner
view: month_table
views:
  - day
  - week
  - month
  - month_table
  - agenda
show_weekends: true
persons:
  - name: Mama
    calendar: calendar.mama
  - name: Papa
    calendar: calendar.papa
  - name: Kind 1
    calendar: calendar.kind_1
  - name: Kind 2
    calendar: calendar.kind_2
  - name: Geburtstage
    calendar: calendar.geburtstage
```

Für ausschließlich diese Ansicht: `view: month_table` und `views: [month_table]`.
Dann gibt es keinen Wechsel zur Tagesansicht; die Termin-Dialoge bleiben nutzbar.

## Wieder zur Originalkarte wechseln

Stelle den gesicherten Ressourcen-Eintrag wieder her und entferne `month_table`
aus `view:` und `views:`. Lade anschließend das Frontend vollständig neu.
Der getrennte Dateiname hält die Erweiterung unabhängig von der Originaldatei;
HACS-Updates aktualisieren diese lokale Kopie nicht automatisch.

## Quellcode und Prüfung

Der vollständige Quellcode ist enthalten. Die Erweiterung teilt das Tabellen-
Rendering zwischen Woche und Monat; beide Monatsansichten teilen dieselbe
Navigation. Die Monatstabelle lädt genau den gewählten Kalendermonat, bis zum
ersten Tag des Folgemonats als exklusiver Grenze. Die vorhandene Segmentierung
übernimmt mehrtägige und ganztägige Termine. Neue Termine verwenden die lokale
Uhrzeit auch an Tagen mit Zeitumstellung.

Die automatisierten Tests decken Monatslängen, Schaltjahre, Zeitumstellung in
Europe/Berlin, Monatsabruf, Jahreswechsel, Navigation, Kalenderzuordnung,
mehrtägige Termine, Personenschalter, Editor-Auswahl und Anlegen am richtigen Datum ab.

```sh
npm ci
npm run lint
npm run format:check
npm test
npm run build
```

Für Layout- und Barrierefreiheitsprüfungen steht `npm run check:browser` bereit;
Chromium wird über `CHROMIUM_PATH` angegeben (siehe `tools/preview/README.md`).
Das Browser-Harness simuliert Home Assistant. Vor dem Einsatz bitte zusätzlich
Monatsnavigation, Scrollansicht, Termine und gegebenenfalls das Anlegen eines
Testtermins in einer echten Home-Assistant-Installation prüfen.

Repository: [HartLander/ha-family-board-card-month-table](https://github.com/HartLander/ha-family-board-card-month-table).
Die MIT-Lizenz und der Copyright-Hinweis des Originals bleiben in `LICENSE` erhalten.
