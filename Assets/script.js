var SearchBtnEl = $("#search-btn");
var citySearchEl = $("#city-input");
var daysEl = $(".5-days");
var form = $("#search-form");
var apiKey = "70554f79fa035299cd5c105d81410758";
var countryCode = "AU";

citySearchEl("input", (event) => {
    event.preventDefault()

    var formData = new FormData(event.target);
    var city = formData.get("city")

    var url = `http://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${apiKey}`;

    fetch(url)
        .then(response => {

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            return response.json();
        })

        .then(data => {
            console.log(data);

        
    var cardEl = $(".card");
    cardEl.find(".card-title").text(data.city.name)//dayjs()?
    cardEl.find(".card-text-temp").text(`temp: ${data.list[0].main.temp}`);
    cardEl.find(".card-text-wind").text(`Wind ${data.list[0].main.wind}`);
    cardEl.find(".card-text-humidity").text(`humidity ${data.list[0].main.humidity}`);

    for (let i = 0; i < 5; i++) {
        var listItem = $(`#day-${i + 1}`);
        var weatherData = data.list[i];
        var temperature = weatherData.main.temp;
        var humidity = weatherData.main.humidity;
        var windSpeed = weatherData.main.wind.speed;
        listItem.innerHTML = `Temperature: ${temperature}, Humidity: ${humidity}, Wind Speed: ${windSpeed}`;
    }
})
.catch (error => {
    console.error('Error:', error);
});
      
});

$(".list-group-item").on("click", function (event) {
    event.preventDefault();

    var city = $(this).text();
    citySearchEl.val(city);
    form.submit();
});

// 3. Parse the API response data.
//     a. Extract the necessary data from the API response, such as the current weather conditions, temperature, humidity, and wind speed.

// var parseApiResponse = function(){
//     fetch(url)
//     .then(function (response){
//         if (response.ok){
//             response.json().then(function (data){
//                 displayWeather(data.items);//function below
//             });
//         } else {
//             alert("error" + response.statusText);
//         }
//     });
// };



// 4. Update the UI with the weather data for the selected city
//     a. Display the city name, date, weather icon, temperature, humidity, and wind speed for the current weather conditions.
//     b. Display a 5-day forecast that shows the date, weather icon, temperature, wind speed, and humidity for each day.

//displayWeather (function){}


// 5. Add the selected city to the search history.
//     a. Store the city name in an array or database that keeps track of all previous searches.
// 6. Listen for click events on the search history items.
//     a. When a search history item is clicked, get the city name from the clicked item.
//     b. Call the weather API to fetch the weather data for the selected city.
//     c. Parse the API response data and update the UI with the weather data for the selected city.
// 7. Handle errors gracefully.
//     a. If any errors occur during the API request or parsing of the response, display a helpful error message to the user.

//**Hint**: Using the 5 Day Weather Forecast API, you'll notice that you will need to pass in coordinates instead of just a city name. Using the OpenWeatherMap APIs, how could we retrieve geographical coordinates given a city name?