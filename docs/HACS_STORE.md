# HACS und Releases dieses Forks

Dieser Fork wird als benutzerdefiniertes HACS-Repository installiert. Die
Aufnahme des Originals in den Standard-Store gilt nicht automatisch für den Fork.
Die Installationsanleitung steht in [README.de.md](../README.de.md#installation).

## Release vorbereiten

1. Den Pull Request prüfen und nach `main` übernehmen.
2. Version in `package.json`, `package-lock.json` und im Konsolenbanner der Karte
   synchron halten; Installationsbeispiele bei Bedarf aktualisieren.
3. `npm ci`, `npm run lint`, `npm run format:check`, `npm test` und
   `npm run build` ausführen. Zusätzlich das Browser-Harness und die Karte in
   Home Assistant prüfen.
4. Im Repository `HartLander/ha-family-board-card-month-table` ein Release vom
   geprüften Commit anlegen, beispielsweise `v0.30.0-month-table.4`.
5. Nach dem Veröffentlichen baut `.github/workflows/release.yml` das Bundle und
   hängt `ha-family-board-card-month-table.js` an das Release. Den erfolgreichen Workflow
   und das Asset prüfen, bevor die HACS-Installation empfohlen wird.

`hacs.json` verwendet den eigenen Dateinamen `ha-family-board-card-month-table.js`;
der Anzeigename ist **Family Board Card – Month Table**. Die eigenen Elemente
`family-board-card-month-table` und `ha-family-board-card-month-table-editor`
erlauben den parallelen Betrieb mit der Originalressource.

Vorabversion `.1` verwendete noch die Namen des Originals. Beim Aktualisieren
auf `.2` den alten Fork-Ressourcen-Eintrag entfernen und den neuen Kartentyp
`custom:family-board-card-month-table` verwenden; Details in der README.

Ein Pull Request allein veröffentlicht noch kein Release. Diese Anleitung
behauptet weder eine Aufnahme des Forks in den Standard-Store noch eine bereits
erfolgreiche HACS-Validierung.
