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
const { UsersModel } = require("../models/users");
const { check_user_email } = require("../middleware/check_user_email");
const { check_user_username } = require("../middleware/check_user_username");
const { SlotModel } = require("../models/slots");
const { AuthenicateAdmin } = require("../middleware/authenticate_admin");

// Separating Routes
const userRoute = express.Router();


// Middlewares
userRoute.use(express.json());




// Users Registration Route
userRoute.post("/register", check_user_email, check_user_username, async (req, res) => {
    let { username, email, password } = req.body;
    try {
        bcrypt.hash(password, saltRounds, async (err, hashed_pass) => {
            if (err) {
                res.send({ "message": "Error while Hashing Password" });
            } else {
                // Generating Token
                // var token = jwt.sign({ email, username }, secretKey, { expiresIn: '24h' });

                // Storing Data and sending response
                let data = new UsersModel({ username, email, "password": hashed_pass });
                await data.save();
                res.send([{ "message": `registration successfull` }]);
            }
        });
    } catch (error) {
        res.send([{ "message": "Error while Registering" }]);
    }
});


// Users Login Route
userRoute.post("/login", async (req, res) => {
    let { email, password } = req.body;
    try {
        let check = await UsersModel.find({ "email": email });

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






// For Admin Purpose
userRoute.use(AuthenicateAdmin);

userRoute.get("/all", async (req, res) => {
    try {
        let data = await UsersModel.find();
        res.send(data);
    } catch (error) {
        res.send({ "Error": error })
    }
})

module.exports = { userRoute };
