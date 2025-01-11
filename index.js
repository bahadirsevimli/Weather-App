

function createWeatherContainer (data) {
    const box = document.createElement("div");
    box.classList.add("box");

    const location = document.createElement("div");
    location.classList.add("location");
    box.appendChild(location);

        const city = document.createElement("div");
        city.classList.add("city");
        city.textContent = "Üsküdar, İstanbul";
        location.appendChild(city);
        

        const country = document.createElement("div");
        country.classList.add("country");
        location.appendChild(country);

    const container = document.createElement("div");
    container.classList.add("container");
    box.appendChild(container);

        const containerWeather = document.createElement("div");
        containerWeather.classList.add("container-weather");
        container.appendChild(containerWeather);

            const degree = document.createElement("div");
            degree.classList.add("degree");

            containerWeather.appendChild(degree);

            const situation = document.createElement("div");
            situation.classList.add("situation");
            containerWeather.appendChild(situation);

        const containerIcon = document.createElement("div");
        containerIcon.classList.add("situation");
        container.appendChild(containerIcon);


    return box;
}

