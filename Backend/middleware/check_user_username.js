// Importing Modules
const express = require("express");

// Importing Custom Modules
const { UsersModel } = require("../models/users");


const check_user_username = async (req, res, next) => {
    let { username } = req.body;
    try {
        let data = await UsersModel.find({ "username": username });
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
module.exports = { check_user_username };