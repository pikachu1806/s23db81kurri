const express = require('express');
const router = express.Router();

// Sample data for aircraft
const aircraftData = [
  { aircraft_model: 'Boeing 747', aircraft_type: 'Commercial', manufacture_year: 2005 },
  { aircraft_model: 'Airbus A320', aircraft_type: 'Commercial', manufacture_year: 2010 },
  { aircraft_model: 'Cessna 172', aircraft_type: 'Private', manufacture_year: 1998 },
  // Add more aircraft data here
];

router.get('/', (req, res) => {
  // Render the 'aircraft' Pug template with the aircraft data
  res.render('aircraft', { title: 'Search Results - Aircraft', results: aircraftData });
});

module.exports = router;
