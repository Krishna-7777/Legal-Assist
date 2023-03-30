const mongoose = require("mongoose");

const bookingSchame = new mongoose.Schema({
    "lawyerID": String,
    "userID": String,
    "time": String,
    "date": String,
    "slotID": String,
    "description": String,
    created_at: {
        type: Date,
        default: Date.now,
        required: false
    }
});

const BookingModel = new mongoose.model("booking", bookingSchame);

module.exports = { BookingModel };


// 1 book
// 2 get for admin purpose