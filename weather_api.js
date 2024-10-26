const axios = require('axios');

const API_KEY = '8495e191e0723b7f633ad91aac0d13a8'; // Replace with your OpenWeatherMap API key
const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather';

async function getWeather(city) {
    const params = {
        q: city,
        appid: API_KEY,
        units: 'metric' // Get temperature in Celsius
    };
    try {
        const response = await axios.get(BASE_URL, { params });
        return response.data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return null;
    }
}

module.exports = { getWeather };