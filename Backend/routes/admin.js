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
const { AdminModel } = require("../models/admin");
const { check_admin_email } = require("../middleware/check_admin_email");
const { check_admin_username } = require("../middleware/check_admin_username");

// Separating Routes
const adminRoute = express.Router();


// Middlewares
adminRoute.use(express.json());




// Users Registration Route
adminRoute.post("/register", check_admin_email, check_admin_username, async (req, res) => {
    let { username, email, password } = req.body;
    try {
        bcrypt.hash(password, saltRounds, async (err, hashed_pass) => {
            if (err) {
                res.send({ "message": "Error while Hashing Password" });
            } else {
                // Generating Token
                // var token = jwt.sign({ email, username }, secretKey, { expiresIn: '24h' });

                // Storing Data and sending response
                let data = new AdminModel({ username, email, "password": hashed_pass });
                await data.save();
                res.send([{ "message": `registration successfull` }]);
            }
        });
    } catch (error) {
        res.send([{ "message": "Error while Registering" }]);
    }
});


// Users Login Route
adminRoute.post("/login", async (req, res) => {
    let { email, password } = req.body;
    try {
        let check = await AdminModel.find({ "email": email });

        if (check.length == 1) {

            bcrypt.compare(password, check[0].password, async (err, result) => {
                if (result) {
                    // Generating Token
                    var token = jwt.sign({ email }, secretKey, { expiresIn: '3h' });

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




module.exports = { adminRoute };
