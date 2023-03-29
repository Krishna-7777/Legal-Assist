const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    "email": String,
    "username": String,
    "password": String
});

const UsersModel = new mongoose.model("user", userSchema);

module.exports = { UsersModel };