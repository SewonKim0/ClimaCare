const express = require('express');
const controllerRoutes = require('./controller'); // Import controller file
const loginRoutes = require('./login'); // Import login file

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Use controller routes
app.use('/', controllerRoutes);

// Use login routes
app.use('/', loginRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
