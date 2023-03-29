const express = require("express");
const mongoose = require("mongoose");
const bookingRoute = express.Router();
const { LawyerModel } = require("../models/lawyers");

bookingRoute.use(express.json());


// To check all Lawyers 
bookingRoute.get("/", async (req, res) => {
    try {
        let allList = await LawyerModel.find();
        res.send(allList);
    } catch (error) {
        res.send({ "Error Found": error });
    }
});


module.exports = { bookingRoute };