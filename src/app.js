document.addEventListener('DOMContentLoaded', () => {
    // API URL - nicht ändern
    const apiBaseUrl = 'https://sys-mint-weather-app-gs.azurewebsites.net/api';

    // DOM Elemente - hier finden wir alle HTML-Elemente, die wir ansprechen wollen
    const cityDropdown = document.getElementById('city-dropdown');
    const weatherContainer = document.getElementById('weather-container');
    const loadingIndicator = document.getElementById('loading-indicator');
    const errorMessage = document.getElementById('error-message');
    const cityNameElement = document.getElementById('city-name');
    const countryElement = document.getElementById('country');
    const conditionIconElement = document.getElementById('condition-icon');
    const conditionTextElement = document.getElementById('condition-text');
    const currentTempElement = document.getElementById('current-temp');
    const humidityElement = document.getElementById('humidity');
    const pressureElement = document.getElementById('pressure');
    const windElement = document.getElementById('wind');
    const forecastCardsContainer = document.getElementById('forecast-cards');
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');

    // Theme Management - bereits implementiert
    initTheme();

    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    });

    function initTheme() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
    }

    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);

        if (theme === 'dark') {
            themeToggle.checked = true;
            themeIcon.textContent = '🌙';
        } else {
            themeToggle.checked = false;
            themeIcon.textContent = '☀️';
        }
    }

    // Lade Städteliste beim Start
    loadCities();


    /**  AUFGABE 1: Städte zum Dropdown hinzufügen */
    function populateCityDropdown(cities) {
        // Entfernt alle bestehenden Optionen außer der ersten
        while (cityDropdown.options.length > 1) {
            cityDropdown.remove(1);
        }

        //Hier code für das Einfügen der Städte in das dropdown einfügen  
    }

    // Lade verfügbare Städte
    function loadCities() {
        showLoading();

        fetch(`${apiBaseUrl}/cities`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('failed-to-fetch-cities');
                }
                return response.json();
            })
            .then((cities) => {
                hideLoading();
                populateCityDropdown(cities);
            })
            .catch((error) => {
                console.error('error-loading-cities', error);
                showError();
            });
    }

    // Lade Wetterdaten für ausgewählte Stadt
    function loadWeatherData(city) {
        showLoading();
        weatherContainer.classList.add('hidden');

        fetch(`${apiBaseUrl}/weather/${city}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('failed-to-fetch-weather-data');
                }
                return response.json();
            })
            .then((weatherData) => {
                setTimeout(() => {
                    hideLoading();
                    weatherContainer.classList.remove('hidden');
                    updateWeatherDisplay(weatherData);
                }, 2000); // 500 Millisekunden = 0,5 Sekunden
            })
            .catch((error) => {
                console.error('error-loading-data', error);
                showError();
            });
    }

    /** AUFGABE 2: Wetterdaten anzeigen */ 
    function updateWeatherDisplay(weatherData) {
        // Setze Stadt und Land
        
        // Setze Wetterbedingungen und Temperatur
        const current = weatherData.current;
       

        // Wetter-Icon, Textbeschreibung, Temperatur


        // Luftfeuchtigkeit, Luftdruck, Wind

        
        // Aktualisiere die Vorhersage
        updateForecast(weatherData.forecast);
    }

    /**  AUFGABE 3: Event Listener für die Stadtauswahl */
    // Hier code für Event Listener einfügen
    

    /**  AUFGABE 4: Wetterkarten erstellen */
    function updateForecast(forecastData) {
        // Leere den Container
        forecastCardsContainer.innerHTML = '';

        // Für jeden Tag in der Vorhersage
        forecastData.forEach((day) => {
            // Erstelle eine neue Karte
            const card = document.createElement('div');
            card.className = 'forecast-card';

            // Formatiere das Datum
            const date = new Date(day.date);
            const dateOptions = { weekday: 'long', day: 'numeric', month: 'long' };

            // Fülle die Karte mit Inhalt
            card.innerHTML = `
                <div class="forecast-date">${date.toLocaleDateString('de-DE', dateOptions)}</div>
                <div class="weather-icon forecast-icon" data-condition="${
                    day.condition.code
                }"></div>
                <div class="forecast-condition">${day.condition.description}</div>
                <div class="forecast-temp">
                    <span class="max-temp">${day.maxTemperature.value}°</span> /
                    <span class="min-temp">${day.minTemperature.value}°</span>
                </div>
                <div class="forecast-details">
                    <div class="forecast-detail">
                        <span class="detail-label">Regen:</span> ${day.precipitation.probability}%
                    </div>
                    <div class="forecast-detail">
                        <span class="detail-label">Wind:</span> ${day.wind.speed} ${day.wind.unit}
                    </div>
                    <div class="forecast-detail">
                        <span class="detail-label">Niederschlag:</span> ${
                            day.precipitation.amount
                        } ${day.precipitation.unit}
                    </div>
                    <div class="forecast-detail">
                        <span class="detail-label">Luftfeuchtigkeit:</span> ${day.humidity}%
                    </div>
                </div>
            `;

            // Füge die Karte zum Container hinzu
            // Die Karte wurde bereits für dich erstellt
            
        });
    }

    /**  AUFGABE 5: Lade- und Fehleranzeigen */
    function showLoading() {
        // 1. Zeige die Ladeanzeige an (entferne die Klasse 'hidden')
    
        // 2. Verstecke die Fehlermeldung (füge die Klasse 'hidden' hinzu)
    }

    function hideLoading() {
        // Verstecke die Ladeanzeige (füge die Klasse 'hidden' hinzu)
    }

    function showError() {
        // 1. Verstecke die Ladeanzeige
        
        // 2. Zeige die Fehlermeldung an
        
        // 3. Verstecke den Wetterbereich
    }
});