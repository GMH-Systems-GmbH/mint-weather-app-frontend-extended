# Wetter-App mit JavaScript

## Was wir heute lernen
- Wie du gezielt kleine Aufgaben direkt an markierten Stellen im bestehenden Code löst
- Wie du mit JavaScript das Verhalten deiner App mit wenigen Zeilen steuerst

---

## Die Aufgaben

### Aufgabe 1: Theme-Umschaltung beim Wechsel

1. Suche den Kommentar
   `// AUFGABE 1: Theme-Umschaltung`
2. Ergänze darunter eine if-else-Anweisung, sodass beim Umschalten der Checkbox das Theme auf "dark" oder "light" gesetzt wird.
   Nutze dafür die Funktion `setTheme()` und prüfe, ob `themeToggle.checked` aktiv ist.

Speichere deine Änderung!

<details>
<summary><strong>Hinweise <-- Anklicken um Hilfe zu öffnen</strong></summary>

- `themeToggle` ist die Checkbox für den Theme-Wechsel.
- Mit `setTheme('dark')` oder `setTheme('light')` änderst du das Aussehen.
- Verwende eine klassische if-else-Struktur.

**Indirektes Beispiel:**
```
if (meinSwitch.checked) {
    macheEtwas('a');
} else {
    macheEtwas('b');
}
```
</details>

---

### Aufgabe 2: Stadtnamen ausgeben

1. Suche den Kommentar `// AUFGABE 2: Zeige den Stadtnamen an` in der Datei.
2. Setze unter dem Kommentar den Wert des Stadtnamens aus den Wetterdaten in das zugehörige Element.

Speichere deine Änderung!

<details>
<summary><strong>Hinweise <-- Anklicken um Hilfe zu öffnen</strong></summary>

- Das Element heißt `cityNameElement`.
- Der Name steht in `weatherData.location.city`.
- Nutze `.textContent`, um den Namen einzutragen.

**Indirektes Beispiel:**
```
element.textContent = datenObjekt.titel;
```
</details>

---

### Aufgabe 3: Ladeanzeige sichtbar machen

1. Suche den Kommentar `// AUFGABE 3: Blende die Ladeanzeige ein` in der Datei.
2. Schreibe darunter eine Zeile, die das Lade-Element sichtbar macht.

Speichere deine Änderung!

<details>
<summary><strong>Hinweise <-- Anklicken um Hilfe zu öffnen</strong></summary>

- Das Element heißt `loadingIndicator`.
- Mit `.classList.remove("hidden")` zeigst du ein Element an.

**Indirektes Beispiel:**
```
element.classList.remove("hidden");
```
</details>

---

### Aufgabe 4: Option für die Stadtliste erzeugen

1. Suche in der Datei nach dem Kommentar
   `// AUFGABE 4: Stadt-Option erzeugen`
2. Erstelle unter dem Kommentar ein neues `<option>`-Element für das Dropdown-Menü, setze den Wert und Text auf die Eigenschaften der Stadt und füge das Element zum `cityDropdown` hinzu.

Speichere deine Änderung!

<details>
<summary><strong>Hinweise <-- Anklicken um Hilfe zu öffnen</strong></summary>

- Nutze `document.createElement("option")`.
- Setze `.value` und `.textContent`.
- Füge das Option-Element mit `.appendChild()` zum Dropdown hinzu.

**Indirektes Beispiel:**
```
const option = document.createElement('option');
option.value = datenObjekt.id;
option.textContent = datenObjekt.name;
liste.appendChild(option);
```
</details>

---

### Aufgabe 5: Neue Vorhersagekarte anlegen

1. Suche in der Datei nach dem Kommentar
   `// AUFGABE 5: Neue Vorhersagekarte anlegen`
2. Erstelle unter dem Kommentar ein neues `div`-Element für die Vorhersagekarte und weise ihm die Klasse `"forecast-card"` zu.

Speichere deine Änderung!

<details>
<summary><strong>Hinweise <-- Anklicken um Hilfe zu öffnen</strong></summary>

- Nutze `document.createElement("div")`
- Weise die Klasse mit `.className = "forecast-card"` zu.

**Indirektes Beispiel:**
```
const card = document.createElement('div');
card.className = 'forecast-card';
```
</details>

---

### Aufgabe 6: Auswahl speichern und Wetterdaten laden

1. Suche in der Datei nach dem Kommentar
   `// AUFGABE 6: Auswahl speichern und Wetterdaten laden`
2. Speichere unter dem Kommentar die aktuelle Auswahl im localStorage und rufe die Funktion `loadWeatherData` mit der ausgewählten Stadt auf.

Speichere deine Änderung!

<details>
<summary><strong>Hinweise <-- Anklicken um Hilfe zu öffnen</strong></summary>

- Nutze `localStorage.setItem()`.
- Rufe `loadWeatherData(stadtId)` auf.

**Indirektes Beispiel:**
```
localStorage.setItem('key', wert);
funktionName(wert);
```
</details>

---

## Prüfe deine Arbeit
- Hast du die Aufgaben exakt an der markierten Stelle gelöst?
- Wird das erwartete Verhalten im Browser sichtbar?

---

## Ressourcen
- [JavaScript auf MDN (deutsch)](https://developer.mozilla.org/de/docs/Web/JavaScript)
- [DOM-Elemente ansprechen](https://developer.mozilla.org/de/docs/Web/API/Document/getElementById)
