// Importing Modules
const express = require("express");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
require('dotenv').config();


// Salt Round for Password Encryption
const saltRounds = 6;


// Secret Key for Token Generation
const secretKey = process.env.SECRETKEY;


// Importing Custom Modules
const { LawyerModel } = require("../models/lawyers");
const { check_lawyer_email } = require("../middleware/check_lawyer_email");
const { check_lawyer_username } = require("../middleware/check_lawyer_username");
const { SlotModel } = require("../models/slots");
const { AuthenicateLawyer } = require("../middleware/authenticate_lawyer");
const { AuthenicateAdmin } = require("../middleware/authenticate_admin");
const { BookingModel } = require("../models/bookings");

// Separating Routes
const lawyerRoute = express.Router();


// Middlewares
lawyerRoute.use(express.json());




// Users Registration Route
lawyerRoute.post("/register", check_lawyer_email, check_lawyer_username, async (req, res) => {
    let { username, email, type, password } = req.body;
    try {
        bcrypt.hash(password, saltRounds, async (err, hashed_pass) => {
            if (err) {
                res.send({ "message": "Error while Hashing Password" });
            } else {
                // Generating Token
                // var token = jwt.sign({ email, username }, secretKey, { expiresIn: '24h' });

                // Storing Data and sending response
                let data = new LawyerModel({ username, email, type, "password": hashed_pass });
                await data.save();
                res.send([{ "message": `registration successfull` }]);
            }
        });
    } catch (error) {
        res.send([{ "message": "Error while Registering" }]);
    }
});


// Users Login Route
lawyerRoute.post("/login", async (req, res) => {
    let { email, password } = req.body;
    try {
        let check = await LawyerModel.find({ "email": email });

        if (check.length == 1) {

            bcrypt.compare(password, check[0].password, async (err, result) => {
                if (result) {
                    // Generating Token
                    var token = jwt.sign({ email }, secretKey, { expiresIn: '7d' });

                    // Sending Response
                    res.send([{ "message": `${check[0].username} is successfully logged in` }, { "username": check[0].username, "Access_Token": token }]);
                } else {
                    res.send([{ "message": "Wrong Credentials" }]);
                }
            });

        } else {
            res.send([{ "message": "Wrong Credentials" }]);
        }

    } catch (error) {
        res.send([{ "message": "Something Went Wrong" }]);
    }
});



// Authenication
lawyerRoute.use(AuthenicateLawyer);

// To add slots by Lawyers 
lawyerRoute.post("/add", async (req, res) => {
    let { username, time, date, available } = req.body;
    try {
        let dateString = date + 'T' + time;
        let mongoDate = new Date(dateString).toISOString();
        let lawyerIDfind = await LawyerModel.find({"username": username});
        let addSlot = new SlotModel({ "lawyerID":lawyerIDfind[0]._id, time, "date": mongoDate, available });
        await addSlot.save();
        res.send({ "msg": "Slot Successfully Added" });
    } catch (error) {
        res.send({ "Error Found": error });
    }
});



module.exports = { lawyerRoute };
