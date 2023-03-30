// Importing Modules
const express = require("express");

// Importing Custom Modules
const { AdminModel } = require("../models/admin");

const check_admin_email = async (req, res, next) => {
    let { email } = req.body;
    try {
        let data = await AdminModel.find({ "email": email });
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
module.exports = { check_admin_email };