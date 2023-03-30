const express = require("express");
const mongoose = require("mongoose");
const bookingRoute = express.Router();
const { LawyerModel } = require("../models/lawyers");

bookingRoute.use(express.json());




module.exports = { bookingRoute };