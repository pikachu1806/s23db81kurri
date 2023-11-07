var aircraft = require('../models/aircraft');

// List of all aircrafts
exports.aircraft_list = async function (req, res) {
    try {
        theAircrafts = await aircraft.find();
        res.send(theAircrafts);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// List of all Aircrafts
exports.aircraft_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Aircraft list');
};

// for a specific aircraft.
exports.aircraft_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: aircraft detail: ' + req.params.id);
};

// Handle aircraft create on POST.
exports.aircraft_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: aircraft create POST');
 };

 // Handle aircraft delete form on DELETE.
exports.aircraft_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: aircraft delete DELETE ' + req.params.id);
};

// Handle aircraft update form on PUT.
exports.aircraft_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: aircraft update PUT' + req.params.id);
};





