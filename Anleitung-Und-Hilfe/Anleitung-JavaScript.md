# Einführung in JavaScript für die Wetter-App
Was ist JavaScript?
JavaScript macht Webseiten interaktiv. Während HTML die Struktur (wie ein Skelett) deiner Webseite darstellt, ist JavaScript wie das Gehirn - es reagiert auf Aktionen und ändert Inhalte.

Mit JavaScript kannst du:

- Auf Benutzeraktionen reagieren (wenn jemand klickt oder etwas auswählt)
- Daten von Servern laden (wie unsere Wetterdaten)
- Inhalte auf der Webseite ändern, ohne die Seite neu zu laden

# Anleitung für JavaScript-Aufgaben

## Aufgabe 1: Event Listener für die Stadtauswahl

### 🎯 Ziel der Aufgabe:

Du sollst Code schreiben, der reagiert, wenn der Benutzer eine Stadt im Dropdown-Menü auswählt. Je nachdem, was ausgewählt wurde, sollen unterschiedliche Aktionen passieren.

### 🔍 Was wir haben:
- Ein Dropdown-Menü (`cityDropdown`)
- Eine Funktion `loadWeatherData(city)`, die Wetterdaten für eine Stadt lädt
- Einen Bereich (`weatherContainer`), der die Wetterdaten anzeigt

### 💡 Schritt-für-Schritt-Hilfe:


#### Frage dich:

- Welches Ereignis (Event) passiert, wenn jemand eine neue Option im Dropdown auswählt? (Tipp: Es heißt "change")
- Wie kann ich auf den aktuell ausgewählten Wert im Dropdown zugreifen? (Tipp: `dropdown.value`)
- Was soll passieren, wenn ein Wert ausgewählt ist? Was, wenn nichts ausgewählt ist?

### Versuch es so:

```
cityDropdown.addEventListener('change', () => {
    // 1. Speichere den ausgewählten Wert in einer Variablen
    const selectedCity = // Hier musst du auf den Wert des Dropdowns zugreifen
    
    // 2. Prüfe, ob eine Stadt ausgewählt wurde
    if (/* Hier musst du prüfen, ob selectedCity einen Wert hat */) {
        // 3a. Wenn ja: Lade die Wetterdaten für diese Stadt
        // Verwende dafür die Funktion loadWeatherData
    } else {
        // 3b. Wenn nein: Verstecke den Wetterbereich
        // Füge dazu die Klasse 'hidden' zum weatherContainer hinzu
    }
});
```

### 🔍 Testen deiner Lösung:
- Wenn du eine Stadt im Dropdown auswählst, sollten Wetterdaten geladen werden
- Wenn du "Stadt auswählen..." wählst, sollte der Wetterbereich verschwinden

### Lernmaterial

- [MDN Web Docs: addEventListener](https://developer.mozilla.org/de/docs/Web/API/EventTarget/addEventListener)
- [MDN Web Docs: Event change](https://developer.mozilla.org/de/docs/Web/API/HTMLElement/change_event)
- [JavaScript.info: Einführung in Events](https://javascript.info/introduction-browser-events)

## Aufgabe 2: Städte zum Dropdown hinzufügen

### 🎯 Ziel der Aufgabe:
Du bekommst eine Liste von Städten vom Server und sollst für jede Stadt eine Option im Dropdown-Menü erstellen.

### 🔍 So sieht die Liste der Städte aus:

```
cities = [
  { id: "berlin", name: "Berlin" },
  { id: "hamburg", name: "Hamburg" },
  { id: "munich", name: "München" },
  // ...und so weiter
]
```

### 💡 Schritt-für-Schritt-Hilfe:

#### Frage dich:

- Wie kannst du durch alle Städte in der Liste gehen? (Tipp: `forEach` ist eine Möglichkeit)
- Wie erstellst du ein neues HTML-Element? (Tipp: `document.createElement`)
- Welche Eigenschaften muss eine Option haben? (Tipp: `value` für den Wert und `textContent` für den angezeigten Text)
- Wie fügst du ein Element zu einem anderen hinzu? (Tipp: `appendChild`)

### Versuch es so:

```
// Für jede Stadt in der Liste
cities.forEach((city) => {
    // 1. Erstelle ein neues option-Element
    const option = document.createElement(/* Hier kommt der Element-Typ */);
    
    // 2. Setze die Eigenschaften der Option
    option.value = // Hier kommt die ID der Stadt
    option.textContent = // Hier kommt der Name der Stadt
    
    // 3. Füge die Option zum Dropdown hinzu
    cityDropdown.appendChild(/* Hier kommt das Element, das hinzugefügt werden soll */);
});
```

### 🔍 Testen deiner Lösung:
- Das Dropdown-Menü sollte alle Städte aus der Liste enthalten
- Wenn du eine Stadt auswählst, sollte ihre ID als Wert verwendet werden

### Lernmaterial

- [MDN Web Docs: Array.forEach()](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [MDN Web Docs: createElement](https://developer.mozilla.org/de/docs/Web/API/Document/createElement)
- [MDN Web Docs: appendChild](https://developer.mozilla.org/de/docs/Web/API/Document/createElement)
- [MDN Web Docs: Option-Element](https://developer.mozilla.org/de/docs/Web/HTML/Element/option)

## Aufgabe 3: Wetterdaten anzeigen

Die Funktion `updateWeatherDisplay` bekommt ein Objekt `weatherData`, das alle Informationen über das aktuelle Wetter enthält. Deine Aufgabe ist es, diese Informationen im HTML anzuzeigen.

### 🔍 So sieht ein Teil der weatherData aus:

```
weatherData = {
  location: {
    city: "Berlin",       // Name der Stadt
    country: "Deutschland" // Name des Landes
  },
  current: {
    temperature: {
      value: 21,         // Temperaturwert (z.B. 21 Grad)
      unit: "celsius"    // Einheit (celsius oder fahrenheit)
    },
    condition: {
      code: "sunny",     // Code für das Icon (z.B. "sunny", "cloudy")
      description: "Sonnig" // Textbeschreibung des Wetters
    },
    humidity: 65,        // Luftfeuchtigkeit in Prozent
    pressure: 1013,      // Luftdruck in hPa
    wind: {
      speed: 15,         // Windgeschwindigkeit
      unit: "km/h",      // Einheit der Windgeschwindigkeit
      direction: "NW"    // Windrichtung
    }
  }
}
```

### 💡 Schritt 1: Stadt und Land anzeigen
Hier sollst du die Stadt und das Land anzeigen. Du musst auf die richtigen Eigenschaften im `weatherData`-Objekt zugreifen.

#### Frage dich:

Wo im `weatherData`-Objekt findest du den Stadtnamen? (Tipp: Schau dir `weatherData.location.city` an)
Welche HTML-Elemente sollen diese Informationen anzeigen? (`cityNameElement` und `countryElement`)

### Versuch es so:

```
// Für den Stadtnamen:
cityNameElement.textContent = // Hier musst du den richtigen Pfad zum Stadtnamen eintragen

// Für den Ländernamen:
countryElement.textContent = // Hier musst du den richtigen Pfad zum Ländernamen eintragen
```

### 💡 Schritt 2: Wetterbedingungen und Temperatur anzeigen

#### Hier geht es um:

- Das Wetter-Icon
- Die Textbeschreibung des Wetters
- Die aktuelle Temperatur mit Einheit

#### Hinweis: 
Die Variable `current` wurde schon für dich erstellt, so dass du nicht immer `weatherData.current` schreiben musst.

#### Frage dich:

Wie kannst du auf den Wetter-Code für das Icon zugreifen? (Tipp: Schau dir `current.condition.code` an)
Wie setzt du ein Attribut bei einem HTML-Element? (`setAttribute`)

### Versuch es so:

```
// Für das Wetter-Icon:
conditionIconElement.setAttribute('data-condition', // Hier musst du den richtigen Pfad zum Code eintragen

// Für die Textbeschreibung:
conditionTextElement.textContent = // Hier musst du den richtigen Pfad zur Beschreibung eintragen

// Für die Temperatur (mit Einheit):
// Wenn unit "celsius" ist, soll "C" angezeigt werden, sonst "F"
currentTempElement.textContent = `${/*Temperaturwert*/}° ${/*Temperatureinheit C oder F*/}`;
```

### 💡 Schritt 3: Weitere Wetterdetails anzeigen

#### Jetzt geht es um zusätzliche Informationen wie:

- Luftfeuchtigkeit (mit %-Zeichen)
- Luftdruck (mit hPa-Einheit)
- Wind (mit Geschwindigkeit, Einheit und Richtung)

### Versuch es so:

```
// Für die Luftfeuchtigkeit:
humidityElement.textContent = `${/*Hier kommt der Feuchtigkeitswert*/}%`;

// Für den Luftdruck:
pressureElement.textContent = // Denk daran, die Einheit "hPa" anzuhängen

// Für den Wind:
// Du musst Geschwindigkeit, Einheit und Richtung kombinieren
windElement.textContent = // Kombiniere die Werte zu einem lesbaren Text
```

### 🔍 Testen deiner Lösung:

Wenn du eine Zeile geschrieben hast, kannst du immer kurz überlegen: "Zeigt das die richtige Information an der richtigen Stelle an?"

Wenn du alles richtig gemacht hast, sollte z.B. angezeigt werden:

- Stadt: "Berlin"
- Land: "Deutschland"
- Wetterbeschreibung: "Sonnig"
- Temperatur: "21° C"
- Luftfeuchtigkeit: "65%"
- Luftdruck: "1013 hPa"
- Wind: "15 km/h NW"

Vergiss nicht, dass am Ende der Funktion die Wettervorhersage aktualisiert wird, indem `updateForecast(weatherData.forecast)` aufgerufen wird. Daran musst du nichts ändern!

### Lernmaterial

- [MDN Web Docs: textContent](https://developer.mozilla.org/de/docs/Web/API/Node/textContent)
- [MDN Web Docs: setAttribute](https://developer.mozilla.org/de/docs/Web/API/Element/setAttribute)
- [MDN Web Docs: Template Literals](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Template_literals)
- [MDN Web Docs: Konditionaloperator (ternärer Operator)](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Operators/Conditional_Operators)

## Aufgabe 4: Wetterkarten erstellen

### 🎯 Ziel der Aufgabe:
In dieser Aufgabe musst du Wetterkarten für die Vorhersage zum Container hinzufügen. Die Karten werden bereits für dich erstellt - du musst sie nur noch in den Container einfügen.

### 🔍 Was wir haben:
- Eine Variable `card`, die eine HTML-Karte für die Wettervorhersage enthält
- Einen Container `forecastCardsContainer`, zu dem die Karten hinzugefügt werden sollen

### 💡 Schritt-für-Schritt-Hilfe:

#### Frage dich:

Wie kann ich ein Element (die Karte) zu einem Container hinzufügen? (Tipp: Denke an die `appendChild`-Methode)

### Versuch es so:

```
// Füge die Karte zum Container hinzu
// Die Karte wurde bereits für dich erstellt
forecastCardsContainer.appendChild(/* Hier kommt die Karte */);
```

### 🔍 Testen deiner Lösung:
- Wenn du die App startest und eine Stadt auswählst, solltest du Vorhersagekarten für die nächsten Tage sehen

### Lernmaterial

- [MDN Web Docs: appendChild](https://developer.mozilla.org/de/docs/Web/API/Node/appendChild)
- [MDN Web Docs: DOM-Manipulation](https://developer.mozilla.org/de/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documentss)

## Aufgabe 5: Lade- und Fehleranzeigen

### 🎯 Ziel der Aufgabe:
Du sollst drei Funktionen implementieren, die steuern, was auf der Webseite angezeigt wird, während Daten geladen werden oder wenn ein Fehler auftritt.

### 🔍 Was wir haben:
- Ein Element `loadingIndicator`, das angezeigt wird, während Daten geladen werden
- Ein Element `errorMessage`, das angezeigt wird, wenn ein Fehler auftritt
- Ein Element `weatherContainer`, das die Wetterdaten enthält
- Die CSS-Klasse `hidden`, die Elemente ausblendet

### 💡 Schritt 1: Funktion showLoading implementieren

#### Frage dich:

- Was soll sichtbar sein, wenn Daten geladen werden? (Tipp: Der `loadingIndicator`)
- Was soll nicht sichtbar sein? (Tipp: Die `errorMessage`)
- Wie kann ich ein Element sichtbar machen? (Tipp: Die Klasse `hidden` entfernen)
- Wie kann ich ein Element verstecken? (Tipp: Die Klasse `hidden` hinzufügen)

### Versuch es so:

```
function showLoading() {
    // 1. Zeige die Ladeanzeige an (entferne die Klasse 'hidden')
    loadingIndicator.classList.remove(/* Hier kommt der Name der Klasse */);
    
    // 2. Verstecke die Fehlermeldung (füge die Klasse 'hidden' hinzu)
    errorMessage.classList.add(/* Hier kommt der Name der Klasse */);
}
```
### 💡 Schritt 2: Funktion hideLoading implementieren

#### Frage dich:
- Was soll passieren, wenn das Laden abgeschlossen ist? (Tipp: Der `loadingIndicator` soll verschwinden)

### Versuch es so:

```
function hideLoading() {
    // Verstecke die Ladeanzeige (füge die Klasse 'hidden' hinzu)
    loadingIndicator.classList.add(/* Hier kommt der Name der Klasse */);
}
```

### 💡 Schritt 3: Funktion showError implementieren

#### Frage dich:

- Was soll angezeigt werden, wenn ein Fehler auftritt? (Tipp: Die `errorMessage`)
- Was soll versteckt werden? (Tipp: Der loadingIndicator und der `weatherContainer`)

### Versuch es so:

```
function showError() {
    // 1. Verstecke die Ladeanzeige
    loadingIndicator.classList.add(/* Hier kommt der Name der Klasse */);
    
    // 2. Zeige die Fehlermeldung an
    errorMessage.classList.remove(/* Hier kommt der Name der Klasse */);
    
    // 3. Verstecke den Wetterbereich
    weatherContainer.classList.add(/* Hier kommt der Name der Klasse */);
}
```

### 🔍 Testen deiner Lösung:
- Wenn Daten geladen werden, sollte die Ladeanzeige erscheinen
- Wenn das Laden erfolgreich ist, sollte die Ladeanzeige verschwinden und die Wetterdaten erscheinen
- Wenn ein Fehler auftritt, sollte die Fehlermeldung erscheinen und die anderen Elemente verschwinden

### Lernmaterial

- [MDN Web Docs: classList](https://developer.mozilla.org/de/docs/Web/API/Element/classList)
- [MDN Web Docs: CSS verstecken mit display](https://developer.mozilla.org/de/docs/Web/CSS/display)
- [JavaScript.info: Element-Styles und Klassen](https://javascript.info/styles-and-classes)

## Grundlegende JavaScript-Konzepte

### Event Listener

```
// Beispiel eines Event Listeners
element.addEventListener('ereignis', () => {
    // Code, der ausgeführt wird, wenn das Ereignis eintritt
});
```

### DOM-Manipulation
```
// Element finden
const element = document.getElementById('element-id');

// Inhalt ändern
element.textContent = 'Neuer Text';

// Attribut setzen
element.setAttribute('attribut', 'wert');

// Element erstellen und hinzufügen
const neuesElement = document.createElement('div');
elternElement.appendChild(neuesElement);
```

### Klassen hinzufügen/entfernen
```
// Klasse hinzufügen (Element verstecken)
element.classList.add('hidden');

// Klasse entfernen (Element anzeigen)
element.classList.remove('hidden');
```

## Prüfe deine Arbeit
Nachdem du alle Aufgaben erledigt hast, sollte die App:

Eine Liste von Städten im Dropdown anzeigen
Wetterdaten laden, wenn eine Stadt ausgewählt wird
Aktuelle Wetterbedingungen anzeigen
Eine 3-Tage-Vorhersage anzeigen
Eine Ladeanzeige während des Datenabrufs zeigen
Eine Fehlermeldung anzeigen, wenn etwas schiefgeht