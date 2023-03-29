// Importing Modules
const express = require("express");

// Importing Custom Modules
const { LawyerModel } = require("../models/lawyers");


const check_lawyer_username = async (req, res, next) => {
    let { username } = req.body;
    try {
        let data = await LawyerModel.find({ "username": username });
        if (data.length == 0) {
            next();
        } else {
            res.send([{ "message": `Username already registered please provide another` }]);
        }
    } catch (error) {
        res.send([{ "message": "Error while checking Username" }]);
    }
};


// Exporting Modules
module.exports = { check_lawyer_username };