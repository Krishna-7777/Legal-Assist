const express = require("express");
const mongoose = require("mongoose");
const { BookingModel } = require("../models/bookings");
const availRoute = express.Router();
const { LawyerModel } = require("../models/lawyers");
const { SlotModel } = require("../models/slots");
const { UsersModel } = require("../models/users");

availRoute.use(express.json());


// To get all Lawyers 
availRoute.get("/", async (req, res) => {
    try {
        let allList = await LawyerModel.find();
        res.send(allList);
    } catch (error) {
        res.send({ "Error in all list of lawyers": error });
    }
});




// To get Lawyer by type
availRoute.get("/type/:type", async (req, res) => {
    const type = req.params.type;
    try {
        let list = await LawyerModel.find({"type": type});
        res.send(list);
    } catch (error) {
        res.send({ "Error in search by lawyer type": error });
    }
});

// To get Lawyer by name using regex Query
availRoute.get("/name/:name", async (req, res) => {
    const name = req.params.name;
    try {
        let regex = new RegExp(name, "i");
        let list = await LawyerModel.find({ "username": regex });
        res.send(list);
    } catch (error) {
        res.send({ "Error in search lawyer name by name param": error });
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
        res.send({"Error in get Slots by LawyerID": error});
    }
});




availRoute.get("/lawyerBookings/:lawyerID", async (req, res) => {
    let lawyerID = req.params.lawyerID;
    try {
        let allList = await BookingModel.find({ "lawyerID": lawyerID }).sort({ created_at: -1 });
        let array = [];
        for (let a = 0; a < allList.length; a++) {
            let obj = {};

            // get data
            let checkUser = await UsersModel.find({ "_id": allList[a].userID });
            let checkLawyer = await LawyerModel.find({ "_id": allList[a].lawyerID });
            let checkSlot = await SlotModel.find({ "_id": allList[a].slotID });

            // set key value
            obj["bookingID"] = allList[a]._id;
            obj["username"] = checkUser[0].username;
            obj["lawyername"] = checkLawyer[0].username;
            obj["time"] = checkSlot[0].time;
            obj["date"] = checkSlot[0].date.toString();
            obj["description"] = allList[a].description;

            // Pushing to array
            array.push(obj);
        }

        res.send(array);
    } catch (error) {
        res.send({"Error in lawerBookings by ID": error})
    }
})



availRoute.get("/userBookings/:userID", async (req, res) => {
    let userID = req.params.userID;
    try {
        let allList = await BookingModel.find({ "userID": userID }).sort({ created_at: -1 });
        let array = [];
        for (let a = 0; a < allList.length; a++) {
            let obj = {};

            // get data
            let checkUser = await UsersModel.find({ "_id": allList[a].userID });
            let checkLawyer = await LawyerModel.find({ "_id": allList[a].lawyerID });
            let checkSlot = await SlotModel.find({ "_id": allList[a].slotID });

            // set key value
            obj["bookingID"] = allList[a]._id;
            obj["username"] = checkUser[0].username;
            obj["lawyername"] = checkLawyer[0].username;
            obj["time"] = checkSlot[0].time;
            obj["date"] = checkSlot[0].date.toString();
            obj["description"] = allList[a].description;

            // Pushing to array
            array.push(obj);
        }

        res.send(array);
    } catch (error) {
        res.send({"Error in userBookings by ID": error})
    }
})


module.exports = { availRoute };