const express = require('express');
const axios = require('axios');
const router = express.Router(); // Create a router instance
const nodemailer = require('nodemailer');
const key = "5a3c7f422f150fc9680b12b0ac6468e6";
router.use(express.urlencoded({ extended: true }));
// Endpoint to get air quality by zip code

const transporter = nodemailer.createTransport({
  service: 'gmail', // e.g., 'gmail', 'hotmail', etc.
  auth: {
    user: 'alexhackathon123@gmail.com', // Your email address
    pass: 'pkrglymonkfiokqe' // Your email password
  }
});


router.post('/airquality', async (req, res) => {
  console.log('Request received:', req.body); // TEST
  
  try {
    const { zipcode } = req.body;

    if (!zipcode) {
      return res.status(400).json({ error: 'Zip code is required' });
    }

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

    if (aqi >= 2) {
      const mailOptions = {
        from: 'alexhackathon123@gmail.com',
        to: 'kathyngananhtran@gmail.com', // User's email address
        subject: 'Air Quality Alert',
        text: `The air quality in your area is ${aqi}. It's advisable to take necessary precautions.`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error sending email:', error);
        } else {
          console.log('Email sent:', info.response);
        }
      });
    }

    res.json({ airQualityIndex: aqi });
  } catch (error) {
    console.error('Error fetching air quality:', error);
    res.status(500).json({ error: 'Error fetching air quality data' });
  }
});

module.exports = router; // Export the router instance
