const express = require("express");
const mongoose = require("mongoose");
const availRoute = express.Router();
const { LawyerModel } = require("../models/lawyers");
const { SlotModel } = require("../models/slots");

availRoute.use(express.json());


// To get all Lawyers 
availRoute.get("/", async (req, res) => {
    try {
        let allList = await LawyerModel.find();
        res.send(allList);
    } catch (error) {
        res.send({ "Error Found": error });
    }
});




// To get Lawyer by type
availRoute.get("/type/:type", async (req, res) => {
    const type = req.params.type;
    try {
        let list = await LawyerModel.find({"type": type});
        res.send(list);
    } catch (error) {
        res.send({ "Error Found": error });
    }
});

// To get Lawyer by name using regex Query
availRoute.get("/name/:name", async (req, res) => {
    const name = req.params.name;
    try {
        let regex = new RegExp(name, "i");
        let list = await LawyerModel.find({ "name": regex });
        res.send(list);
    } catch (error) {
        res.send({ "Error Found": error });
    }
});


// Get Available Slots by LawyerID
availRoute.get("/slots/:lawyerID", async(req,res)=>{
    try {
        let id = req.params.lawyerID;
        let currentTime = await new Date();
        let allSlots = await SlotModel.find({$and: [{lawyerID: id}, {date: { $gte: currentTime }}]})
        res.send(allSlots);
    } catch (error) {
        res.send({"Error": error});
    }
});




module.exports = { availRoute };