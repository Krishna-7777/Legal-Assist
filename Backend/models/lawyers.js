const mongoose = require("mongoose");

const lawyerSchema = new mongoose.Schema({
    "email": String,
    "username": String,
    "password": String,
    "type": String
});

const LawyerModel = new mongoose.model("lawyer", lawyerSchema);

module.exports = { LawyerModel };


// -----------------
// 
// {LawyerID,userID, slotTIme, date}
// Users Schema
// Email, username, password

// date
// slot

