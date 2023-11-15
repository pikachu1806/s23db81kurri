var express = require('express');
var router = express.Router();

// Require controller modules.
var api_controller = require('../controllers/api');
var aircraft_controller = require('../controllers/aircraft');
const aircraft = require('../models/aircraft');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// AIRCRAFT ROUTES ///
// POST request for creating a aircraft.
router.post('/aircraft', aircraft_controller.aircraft_create_post);
// DELETE request to delete aircraft.
router.delete('/aircraft/:id', aircraft_controller.aircraft_delete);
// PUT request to update aircraft.
router.put('/aircraft/:id', aircraft_controller.aircraft_update_put);
// GET request for one aircraft.
router.get('/aircraft/:id', aircraft_controller.aircraft_detail);
// GET request for list of all aircraft items.
router.get('/aircraft', aircraft_controller.aircraft_list);
module.exports = router;