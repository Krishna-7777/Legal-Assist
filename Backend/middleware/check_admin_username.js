// Importing Modules
const express = require("express");

// Importing Custom Modules
const { AdminModel } = require("../models/admin");


const check_admin_username = async (req, res, next) => {
    let { username } = req.body;
    try {
        let data = await AdminModel.find({ "username": username });
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
module.exports = { check_admin_username };