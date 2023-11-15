const express = require('express');
const aircraft_controlers= require('../controllers/aircraft');
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

 // GET request for one costume.
 router.get('/aircraft/:id', aircraft_controlers.aircraft_detail);

/* GET home page. */
router.get('/', aircraft_controlers.aircraft_view_all_Page);

/* GET detail aircraft page */
router.get('/detail', aircraft_controlers.aircraft_view_one_Page);

/* GET create aircraft page */
router.get('/create', aircraft_controlers.aircraft_create_Page);

/* GET create update page */
router.get('/update', aircraft_controlers.aircraft_update_Page);

/* GET delete iphone page */
router.get('/delete', aircraft_controlers.aircraft_delete_Page);

module.exports = router;
