const mongoose = require("mongoose");

const slotSchame = new mongoose.Schema({
    "lawyerID": String,
    "time": String,
    "date": Date,
    "available": Boolean
});

const SlotModel = new mongoose.model("slot", slotSchame);

module.exports = { SlotModel };