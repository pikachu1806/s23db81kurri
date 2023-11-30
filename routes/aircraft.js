const express = require('express');
const passport = require('passport');
const aircraft_controlers= require('../controllers/aircraft');
const router = express.Router();
var Account = require('../models/account');

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

const secured = (req, res, next) => {
  if (req.user) {
    return next();
  }
  res.redirect("/login");
}

router.get('/update', secured, aircraft_controlers.aircraft_update_Page);
router.get('/delete', secured, aircraft_controlers.aircraft_delete_Page);
router.get('/create', secured, aircraft_controlers.aircraft_create_Page);
router.get('/detail', secured, aircraft_controlers.aircraft_view_one_Page);

router.post('/login', passport.authenticate('local'), function (req, res) {
  res.redirect('/');
});

module.exports = router;
