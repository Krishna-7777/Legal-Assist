const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
    "email": String,
    "username": String,
    "password": String
});

const AdminModel = new mongoose.model("admin", adminSchema);

module.exports = { AdminModel };