# Hilfe und erweitertes Wissen

## JavaScript-Grundlagen

### Variablen und Konstanten

- `let` - Für Werte, die sich ändern können

    ```
    let temperatur = 25;
    temperatur = 26; // Wert kann geändert werden
    ```

- `const` - Für Werte, die sich nicht ändern sollen

    ```
    const apiUrl = "https://api.wetter.com";
    // apiUrl = "neue-url"; // Fehler! Kann nicht geändert werden
    ```
- `var` - Ältere Variante, besser let oder const verwenden

## Datentypen in JavaScript

- `String` - Text, in Anführungszeichen

    ```
    const stadtname = "Berlin";
    ```

- `Number` - Zahlen (ganze Zahlen und Dezimalzahlen)
    ```
    const temperatur = 21.5;
    ```
- `Boolean` - Wahrheitswert (true/false)

    ```
    const istRegnerisch = false;
    ```

- `Object` - Sammlung von Eigenschaften

    ```
    const wetterDaten = {
        stadt: "Berlin",
        temperatur: 21.5,
        bedingung: "sonnig"
    };
    // Zugriff: wetterDaten.stadt oder wetterDaten["stadt"]
    ```
- `Array` - Geordnete Liste von Werten

    ```
    const wochentage = ["Montag", "Dienstag", "Mittwoch"];
    // Zugriff: wochentage[0] für "Montag"
    ```

## Funktionen

- **Funktionsdefinition**

    ```
    function berechneTemperatur(celsius) {
        return celsius * 9/5 + 32; // Umrechnung in Fahrenheit
    }
    ```

- **Funktionsaufruf**

    ```
    const fahrenheit = berechneTemperatur(25);
    ```

- **Pfeilfunktionen** (Arrow Functions) - Kürzere Schreibweise

    ```
    const berechneTemperatur = (celsius) => celsius * 9/5 + 32;
    ```

## DOM-Manipulation

- **Element** mit `ID` finden

    ```
    const temperaturElement = document.getElementById("temperatur");
    ```

- **Element-Inhalt** ändern

    ```
    temperaturElement.textContent = "25°C";
    ```

- **Attribut** ändern

    ```
    const wetterIcon = document.getElementById("wetter-icon");
    wetterIcon.setAttribute("src", "icons/sonne.png");
    ```

- **Element-Klassen** manipulieren

    ```
    element.classList.add("hervorgehoben");    // Klasse hinzufügen
    element.classList.remove("versteckt");     // Klasse entfernen
    element.classList.toggle("ausgewählt");    // Klasse umschalten
    element.classList.contains("aktiv");       // Prüfen, ob Klasse vorhanden
    ```

## JavaScript-Events

### Wichtige Events
- `click` - Wenn ein Element angeklickt wird
- `change` - Wenn sich der Wert eines Inputs, Select oder Textarea ändert
- `submit` - Wenn ein Formular abgeschickt wird
- `DOMContentLoaded` - Wenn das HTML-Dokument vollständig geladen ist
- `load` - Wenn die gesamte Seite (inkl. Bilder, Stylesheets) geladen ist

- **Event-Listener** hinzufügen

    ```
    const button = document.getElementById("wetter-button");
        button.addEventListener("click", () => {
        console.log("Button wurde geklickt!");
        // Dein Code hier
    });
    ```

- **Event-Objekt**

    ```
    formElement.addEventListener("submit", (event) => {
        event.preventDefault(); // Verhindert das Standard-Verhalten (z.B. Seiten-Reload)
        
        // Auf Event-Target zugreifen
        const formular = event.target;
    });
    ```

## Daten abrufen mit fetch

### Grundstruktur

```
fetch("https://api.beispiel.com/daten")
  .then(response => {
    if (!response.ok) {
      throw new Error("Netzwerk-Antwort war nicht ok");
    }
    return response.json(); // Antwort als JSON parsen
  })
  .then(daten => {
    console.log("Erhaltene Daten:", daten);
    // Hier mit den Daten arbeiten
  })
  .catch(fehler => {
    console.error("Fehler beim Abrufen der Daten:", fehler);
});
```

### Parameter hinzufügen

```
fetch(`https://api.wetter.com/forecast?city=${stadt}&days=3`)
```

### Tipps für fetch
- Verwende immer eine Fehlerbehandlung mit `.catch()`
- Prüfe mit `if (!response.ok)`, ob die Anfrage erfolgreich war
- Bei langsamen Verbindungen: Zeige einen Ladeindikator an

## Häufige JavaScript-Fehler und Lösungen

### "Cannot read property 'xyz' of undefined/null"

**Problem**: Du versuchst auf eine Eigenschaft eines undefinieren Objekts zuzugreifen

**Lösung**: Prüfen, ob das Objekt existiert, bevor du seine Eigenschaften verwendest

```
if (wetterDaten && wetterDaten.temperatur) {
  console.log(wetterDaten.temperatur.wert);
}
```

### SyntaxError: Fehlende Klammern oder Semikolons

**Tipp**: Achte auf diese häufigen Fehlerquellen:

- Jede öffnende Klammer { braucht eine schließende }
- Jede öffnende Runde Klammer ( braucht eine schließende )
- Jedes öffnende Anführungszeichen braucht ein schließendes
- Asynchrone Fehler verstehen
- JavaScript arbeitet oft asynchron. Wenn Daten von einem Server geladen werden, kann das einige Zeit dauern.

### Asynchrone Fehler verstehen  

JavaScript arbeitet oft asynchron. Wenn Daten von einem Server geladen werden, kann das einige Zeit dauern.

**Problem**: Code wird ausgeführt, bevor Daten verfügbar sind

**Lösung**: Stelle sicher, dass du mit den Daten erst arbeitest, wenn sie wirklich verfügbar sind

```
// Richtig:
fetch(url)
  .then(response => response.json())
  .then(daten => {
    // Hier sind die Daten verfügbar
    updateWeatherDisplay(daten);
  });

// Falsch:
let daten;
fetch(url)
  .then(response => response.json())
  .then(result => {
    daten = result;
  });
// ⚠️ Hier sind die Daten möglicherweise noch nicht verfügbar!
updateWeatherDisplay(daten);
```

## Debugging-Tipps

### Console.log verwenden

Setze `console.log()` an strategischen Stellen ein, um Werte zu überprüfen:

```
console.log("Wetterdaten:", weatherData);
console.log("Temperatur:", weatherData.current.temperature.value);
```

### Browser-Entwicklertools
1. Öffne die Entwicklertools mit F12 oder Rechtsklick → "Untersuchen"
2. Wechsle zur "Konsole", um Fehler und Ausgaben zu sehen
3. Nutze den "Inspektor", um HTML-Elemente zu untersuchen
4. Im "Netzwerk"-Tab kannst du API-Anfragen überwachen
