const express = require('express');
const axios = require('axios');
const router = express.Router(); // Create a router instance

const key = "5a3c7f422f150fc9680b12b0ac6468e6";

// Endpoint to get air quality by zip code
router.get('/airquality', async (req, res) => {
  try {
    const zipcode = 10012; // Default zip code for testing

    // Fetching latitude and longitude from OpenWeatherMap API
    const weatherResponse = await axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&appid=${key}`);
    const { coord } = weatherResponse.data;
    const { lat, lon } = coord;

    // Fetching air quality data using latitude and longitude
    const airQualityResponse = await axios.get(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${key}`);

    // Extracting relevant air quality information
    const { list } = airQualityResponse.data;
    const [currentData] = list;
    const { main } = currentData;
    const { aqi } = main;

    res.json({ airQualityIndex: aqi });
  } catch (error) {
    console.error('Error fetching air quality:', error);
    res.status(500).json({ error: 'Error fetching air quality data' });
  }
});

module.exports = router; // Export the router instance
