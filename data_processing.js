// data_processing.js

function processWeatherData(weatherData) {
    // Check if weatherData is valid
    if (!weatherData || !weatherData.main || !weatherData.weather || !weatherData.weather.length) {
        console.error('Invalid weather data:', weatherData);
        return null; // Return null if data is invalid
    }

    return {
        temperature: weatherData.main.temp, // Current temperature
        description: weatherData.weather[0].description, // Weather description
        humidity: weatherData.main.humidity, // Humidity percentage
        windSpeed: weatherData.wind.speed, // Wind speed
        dt: weatherData.dt // Include the timestamp
    };
}

module.exports = { processWeatherData };