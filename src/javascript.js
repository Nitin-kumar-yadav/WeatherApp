


const search = document.getElementById("search")

search.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
        event.preventDefault();
        const city = search.value;
        const apiKey = "bc9a00ea8c319215cd42d827a5a7d657"


        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json(); // Parse the JSON data
            })
            .then(data => {
                // Work with the JSON data


                let weather_forecast = document.getElementById("weatherforecast")
                weather_forecast.innerHTML = data.weather[0].main;
                let weather__minmax = document.getElementById('weathermin')
                let minimum = (data.main.temp_min) - 273.15;
                weather__minmax.innerHTML = Math.round(minimum);
                let weather__max = document.getElementById('weathermax')
                let maximum = (data.main.temp_max) - 273.15;
                weather__max.innerHTML = Math.round(maximum);

                let realfeel = document.getElementsByClassName("weather__realfeel")[0]

                let weather__realfeel = (data.main.feels_like) - 273.15;
                realfeel.innerHTML = Math.round(weather__realfeel);

                let weather__humidity = document.getElementsByClassName("weather__humidity")[0]

                weather__humidity.innerHTML = (data.main.humidity);

                let weather__wind = document.getElementsByClassName("weather__wind")[0]

                weather__wind.innerHTML = (data.wind.speed)


                let weather__pressure = document.getElementsByClassName("weather__pressure")[0]

                weather__pressure.innerHTML = (data.main.pressure)


                let weather__icon = document.getElementsByClassName("weather__icon")[0]

                if (data.weather[0].main === "Clear") {
                    weather__icon.innerHTML = `<img src="clear.svg" alt="Clear" srcset="">`
                }
                if (data.weather[0].main === "Wind") {
                    weather__icon.innerHTML = `<img src="wind.svg" alt="wind" srcset="">`
                }
                if (data.weather[0].main === "Rain") {
                    weather__icon.innerHTML = `<img src="rain.svg" alt="wind" srcset="">`
                }
                if (data.weather[0].main === "Snow") {
                    weather__icon.innerHTML = `<img src="snow.svg" alt="wind" srcset="">`
                }
                if (data.weather[0].main === "Clouds") {
                    weather__icon.innerHTML = `<img src="cloud.svg" alt="wind" srcset="">`
                }
                if (data.weather[0].main === "Haze") {
                    weather__icon.innerHTML = `<img src="haze.svg" alt="wind" srcset="">`
                }
                if (data.weather[0].main === "Thunderstorm") {
                    weather__icon.innerHTML = `<img src="thunder-svgrepo-com.svg" alt="wind" srcset="">`
                }

                let weather__temperature = document.getElementsByClassName("weather__temperature")[0].innerHTML = Math.round((data.main.temp) - 273.15);

                document.getElementsByClassName("weather__city")[0].innerHTML = data.name



                console.log(data);
                // console.log(data.weather[0].main);
                // console.log(minimum);
                // console.log(typeof data)


                // return data;
            })
            .catch(error => {
                // Handle errors
                console.error('There was a problem with the fetch operation:', error);
            });

    }
})

