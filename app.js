const { getWeather } = require('./weather_api');
const { processWeatherData } = require('./data_processing');
const { updateDailySummary, calculateDailySummary } = require('./daily_summary');

const city = 'Delhi'; // Change to your desired city
const interval =  10 * 1000; // Fetch data every 5 minutes

console.log(`Starting weather monitoring for ${city}...`);

setInterval(async () => {
    console.log('Fetching weather data...');
    const weatherData = await getWeather(city);
    if (weatherData) {
        const processedData = processWeatherData(weatherData);
        updateDailySummary(processedData);
        console.log(`Fetched weather data for ${city}:`, processedData);
        
        // Calculate and log daily summary
        const today = new Date().toISOString().split('T')[0];
        const dailySummary = calculateDailySummary(today);
        if (dailySummary) {
            console.log(`Daily Summary for ${today}:`, dailySummary);
        }
    } else {
        console.log('No weather data received.');
    }
}, interval);