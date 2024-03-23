const express = require('express');
const { auth, requiresAuth } = require('express-openid-connect');
const app = express();

// Auth0 Configuration
const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'd8S6vr_ssvKKLbWkjIWjiXso25X89m4PmVeyzREEBoso95wD5pbzXuvR_aNo-_vS',
  baseURL: 'http://localhost:3000',
  clientID: '2Pcnyr9vzIoUNvyoeDDRpHYHCJ2xaH6Z',
  issuerBaseURL: 'https://dev-111g47toq4mj6354.us.auth0.com',
};

// Auth0 Middleware
app.use(auth(config));

// Route for the homepage
app.get('/', (req, res) => {
  // Redirect to the profile page if the user is authenticated
  if (req.oidc.isAuthenticated()) {
    res.redirect('/profile');
  } else {
    res.send('Logged out');
  }
});

// Route to display user profile
app.get('/profile', requiresAuth(), (req, res) => {
  // Extract user information from the authenticated user's profile
  const { given_name, family_name, email } = req.oidc.user;

  // Display user information
  res.send(`First Name: ${given_name}<br>Last Name: ${family_name}<br>Email: ${email}`);
});

module.exports = app; // Export the Express application instance
