const mongoose = require("mongoose");

const bookingSchame = new mongoose.Schema({
    "lawyerID": String,
    "userID": String,
    "slotID": String,
    "description": {
        type: String,
        required: false,
        default: "I am writing to inquire about your availability and interest in providing legal services for a matter that I need assistance with. While I cannot provide any specific details at this time, I can assure you that the matter is of great importance and requires the expertise of a knowledgeable and experienced lawyer such as yourself.If you are available and interested in discussing the matter further, please let me know your availability and preferred method of communication, as well as your consultation fees.Thank you for your time and consideration.I look forward to hearing from you soon."
    },
    created_at: {
        type: Date,
        default: Date.now(),
        required: false
    }
});

const BookingModel = new mongoose.model("booking", bookingSchame);

module.exports = { BookingModel };


// 1 book
// 2 get for admin purpose