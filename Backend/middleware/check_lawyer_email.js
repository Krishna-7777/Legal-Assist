// Importing Modules
const express = require("express");

// Importing Custom Modules
const { LawyerModel } = require("../models/lawyers");

const check_lawyer_email = async (req, res, next) => {
    let { email } = req.body;
    try {
        let data = await LawyerModel.find({ "email": email });
        if (data.length == 0) {
            next();
        } else {
            res.send([{ "message": `Email is already registered Please Login` }]);
        }
    } catch (error) {
        res.send([{ "message": "Error while checking Email" }]);
    }
};


// Exporting Modules
module.exports = { check_lawyer_email };