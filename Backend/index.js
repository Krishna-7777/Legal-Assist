// Importing Modules
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
require('dotenv').config();




// Importin Custom Modules
const { connection } = require("./config/db");



// port number
const port = process.env.port_no;

// Using express as app keyword
const app = express();

// Using Cors
app.use(cors());


// Routes

// GET request for Homepage
app.get("/", (req, res) => {
    res.send("Welcome to Legal Assist");
});


// Users Route Segregation
app.use("/users", userRoute);



// Starting server and connecting to the MongoDB
app.listen(port, async () => {
    try {
        await connection;
        console.log("Connected to Database");
    } catch (error) {
        console.log("Error while connecting to Database");
    }
    console.log(`Listening to the port ${port}`);
});