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

// VIEWS
// Handle a show all view
exports.aircraft_view_all_Page = async function (req, res) {
    try {
        theaircraft = await aircraft.find();
        res.render('aircraft', { title: 'aircraft Search Results', results: theaircraft });
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

// Handle Costume create on POST.
exports.aircraft_create_post = async function (req, res) {
    console.log(req.body)
    let document = new aircraft();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"aircraft_model": 'Boeing 747', "aircraft_type": 'Commercial', "manufacture_year": 2005}
    document.aircraft_type = req.body.aircraft_type;
    document.aircraft_model = req.body.aircraft_modele;
    document.manufacture_year = req.body.manufacture_year;
    try {
        let result = await document.save();
        console.log(result);
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
