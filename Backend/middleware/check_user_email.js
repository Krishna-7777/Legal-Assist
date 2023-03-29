// Importing Modules
const express = require("express");

// Importing Custom Modules
const { UsersModel } = require("../models/users");

const check_user_email = async (req, res, next) => {
    let { email } = req.body;
    try {
        let data = await UsersModel.find({ "email": email });
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
module.exports = { check_user_email };