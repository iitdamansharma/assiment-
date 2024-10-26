// daily_summary.js

let dailySummary = {};

function updateDailySummary(weatherData) {
    // Check if the weatherData has the expected structure
    if (!weatherData || !weatherData.dt) {
        console.error('Invalid weather data:', weatherData);
        return;
    }

    // Use the dt field from the weatherData
    const date = new Date(weatherData.dt * 1000).toISOString().split('T')[0];

    if (!dailySummary[date]) {
        dailySummary[date] = {
            temperature: [],
            description: [],
            humidity: [],
            windSpeed: [],
        };
    }

    dailySummary[date].temperature.push(weatherData.temperature);
    dailySummary[date].description.push(weatherData.description);
    dailySummary[date].humidity.push(weatherData.humidity);
    dailySummary[date].windSpeed.push(weatherData.windSpeed);
}

function calculateDailySummary(date) {
    if (!dailySummary[date]) {
        return null;
    }

    const summary = dailySummary[date];
    return {
        averageTemperature: summary.temperature.reduce((a, b) => a + b, 0) / summary.temperature.length,
        averageHumidity: summary.humidity.reduce((a, b) => a + b, 0) / summary.humidity.length,
        averageWindSpeed: summary.windSpeed.reduce((a, b) => a + b, 0) / summary.windSpeed.length,
    };
}

module.exports = { updateDailySummary, calculateDailySummary };