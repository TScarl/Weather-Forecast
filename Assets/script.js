// 1. Listen for form input events.
//     a. When the form is submitted, prevent the default form submission behavior.
//     b. Get the value of the city input field.

handleSubmitForm function(){
    preventDefault()

    
}








// 2. Call the weather API to fetch the weather data for the city.
//     a. Construct the API request URL with the city name and API key.
//     b. Make a fetch request to the API endpoint with the constructed URL.
//     c. Handle any errors that may occur during the request.
// 3. Parse the API response data.
//     a. Extract the necessary data from the API response, such as the current weather conditions, temperature, humidity, and wind speed.
// 4. Update the UI with the weather data for the selected city.
//     a. Display the city name, date, weather icon, temperature, humidity, and wind speed for the current weather conditions.
//     b. Display a 5-day forecast that shows the date, weather icon, temperature, wind speed, and humidity for each day.
// 5. Add the selected city to the search history.
//     a. Store the city name in an array or database that keeps track of all previous searches.
// 6. Listen for click events on the search history items.
//     a. When a search history item is clicked, get the city name from the clicked item.
//     b. Call the weather API to fetch the weather data for the selected city.
//     c. Parse the API response data and update the UI with the weather data for the selected city.
// 7. Handle errors gracefully.
//     a. If any errors occur during the API request or parsing of the response, display a helpful error message to the user.

//**Hint**: Using the 5 Day Weather Forecast API, you'll notice that you will need to pass in coordinates instead of just a city name. Using the OpenWeatherMap APIs, how could we retrieve geographical coordinates given a city name?