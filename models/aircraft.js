const mongoose = require("mongoose")
const aircraftSchema = mongoose.Schema({
aircraft_type: {
    type: String,
    required:true,
    minLength:4,
    maxLength:25
   
},
aircraft_model: String,
manufacture_year: {
    type:Number,
    required:true,
    min:0,
    max:10000
}
    
})
module.exports = mongoose.model("Aircraft",
aircraftSchema)