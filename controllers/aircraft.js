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

// // List of all Aircrafts
// exports.aircraft_list = function(req, res) {
//     res.send('NOT IMPLEMENTED: Aircraft list');
// };

// for a specific aircraft.
exports.aircraft_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: aircraft detail: ' + req.params.id);
};

// // Handle aircraft create on POST.
// exports.aircraft_create_post = function (req, res) {
//     res.send('NOT IMPLEMENTED: aircraft create POST');
//  };

 // Handle aircraft delete form on DELETE.
exports.aircraft_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: aircraft delete DELETE ' + req.params.id);
};

// Handle aircraft update form on PUT.
exports.aircraft_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: aircraft update PUT' + req.params.id);
};

// Handle Aircraft create on POST.
exports.aircraft_create_post = async function (req, res) {
    console.log(req.body)
    let document = new aircraft();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"aircraft_model": 'Boeing 747', "aircraft_type": 'Commercial', "manufacture_year": 2005}
    document.aircraft_type = req.body.aircraft_type;
    document.aircraft_model = req.body.aircraft_model;
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

// for a specific aircraft.
exports.aircraft_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await aircraft.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

// Handle aircraft update form on PUT.
exports.aircraft_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await aircraft.findById(req.params.id)
        // Do updates of properties
        if (req.body.aircraft_type)
            toUpdate.aircraft_type = req.body.aircraft_type;
        if (req.body.aircraft_model) toUpdate.aircraft_model = req.body.aircraft_model;
        if (req.body.manufacture_year) toUpdate.manufacture_year = req.body.manufacture_year;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        console.log('Came to error')
        res.status(500)
        res.send(`{"error": "Values are not Valid failed"}`);
    }
};

// Handle aircraft delete on DELETE.
exports.aircraft_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await aircraft.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};

// Handle a show one view with id specified by query
exports.aircraft_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await aircraft.findById(req.query.id)
        res.render('aircraftdetail',
            { title: 'Aircraft Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.aircraft_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('aircraftcreate', { title: 'Aircraft Create' });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for updating a costume.
// query provides the id
exports.aircraft_update_Page = async function (req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await aircraft.findById(req.query.id)
        res.render('aircraftupdate', { title: 'Aircraft Update', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
