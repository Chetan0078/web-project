function getWeather() {
    const city = document.getElementById('cityInput').value.trim();
    const apiKey = '20a623a6df5347d8b45141207251709';

    if (city === "") {
        document.getElementById('weatherInfo').innerHTML = `<p>Please enter a city name.</p>`;
        return;
    }

    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                document.getElementById('weatherInfo').innerHTML = `<p>${data.error.message}</p>`;
            } else {
                document.getElementById('weatherInfo').innerHTML = `
                    <h2>Weather in ${data.location.name}, ${data.location.country}</h2>
                    <p><strong>Temperature:</strong> ${data.current.temp_c} °C</p>
                    <p><strong>Condition:</strong> ${data.current.condition.text}</p>
                    <p><strong>Humidity:</strong> ${data.current.humidity}%</p>
                    <p><strong>Wind Speed:</strong> ${data.current.wind_kph} kph</p>
                    <img src="${data.current.condition.icon}" alt="Weather icon"/>
                `;
            }
        })
        .catch(err => {
            document.getElementById('weatherInfo').innerHTML = `<p>Error fetching data.</p>`;
            console.error(err);
        });
}

document.getElementById('toggleModeBtn').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
    const btn = document.getElementById('toggleModeBtn');
    if (document.body.classList.contains('dark-mode')) {
        btn.textContent = 'Switch to Light Mode';
    } else {
        btn.textContent = 'Switch to Dark Mode';
    }
});
