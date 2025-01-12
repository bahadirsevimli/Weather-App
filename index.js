

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
            country.textContent = data["sys"]["country"];
            location.appendChild(country);

        const container = document.createElement("div");
        container.classList.add("container");
        box.appendChild(container);

            const containerWeather = document.createElement("div");
            containerWeather.classList.add("container-weather");
            container.appendChild(containerWeather);

                const degree = document.createElement("div");
                degree.classList.add("degree");
                degree.textContent = `${Math.round(data["main"]["temp"])} °`;
                containerWeather.appendChild(degree);

                const situation = document.createElement("div");
                situation.classList.add("situation");
                situation.textContent = data["weather"][0]["description"];
                containerWeather.appendChild(situation);

            const containerIcon = document.createElement("div");
            containerIcon.classList.add("container-icon");
            container.appendChild(containerIcon);

                const icon = document.createElement("img");
                icon.classList.add("icon-image");
                icon.alt = data["weather"]["description"];
                icon.src = `/Assets/Icons/${data["weather"][0]["icon"]}.png`;
                containerIcon.appendChild(icon);

    return box;
}

axios.get("https://api.openweathermap.org/data/2.5/weather?units=metric&lat=41.01&lon=29.02&appid=882853605eda9ba83449e273e5c7e4ca")
.then((response) => {
    const newBox = createWeatherContainer(response.data);
    document.querySelector(".wrap").appendChild(newBox);
})
.catch((error) => {
    console.log(error);
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "Bulunduğunuz yerin hava durumu bilgilerine erişilemiyor.";
    document.querySelector(".wrap").appendChild(errorMessage);
}
)


