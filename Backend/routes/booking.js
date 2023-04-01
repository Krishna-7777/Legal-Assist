const express = require("express");
const mongoose = require("mongoose");
const { mailer } = require("../mailer/mailer");
const { AuthenicateAdmin } = require("../middleware/authenticate_admin");
const bookingRoute = express.Router();

const { AuthenicateUser } = require("../middleware/authenticate_user");
const { BookingModel } = require("../models/bookings");
const { LawyerModel } = require("../models/lawyers");
const { SlotModel } = require("../models/slots");
const { UsersModel } = require("../models/users");

bookingRoute.use(express.json());




bookingRoute.post("/", AuthenicateUser, async (req, res) => {
    let data = req.body;
    let { lawyerID, username, slotID } = data;

    try {
        let findUserID = await UsersModel.find({"username": username});
        
        let checkUser = await UsersModel.find({ "_id": findUserID[0]._id });
        let checkLawyer = await LawyerModel.find({ "_id": lawyerID });
        let checkSlot = await SlotModel.find({ "_id": slotID });

        if (checkUser.length == 0 || checkLawyer.length == 0 || checkSlot.length == 0) {
            return;
        }


        let userEmail = checkUser[0].email;
        let userUsername = username;
        let lawyerEmail = checkLawyer[0].email;
        let lawyerUsername = checkLawyer[0].username;
        let time = checkSlot[0].time;
        let date = checkSlot[0].date;


        await SlotModel.findByIdAndUpdate({ "_id": slotID }, { "available": false });


        let addData = new BookingModel({lawyerID, "userID": findUserID[0]._id, slotID });
        await addData.save();
        mailer(userEmail, userUsername, lawyerEmail, lawyerUsername, time, date);
        res.send({ "msg": "Booking Successfull" });
    } catch (error) {
        res.send({ "Error": error });
    }
});




// For Admin Purpose
bookingRoute.get("/allBookings", AuthenicateAdmin, async (req, res) => {
    try {
        let allList = await BookingModel.find();
        let array = [];
        for (let a = 0; a < allList.length; a++) {
            let obj = {};

            // get data
            let checkUser = await UsersModel.find({ "_id": allList[a].userID });
            let checkLawyer = await LawyerModel.find({ "_id": allList[a].lawyerID });
            let checkSlot = await SlotModel.find({ "_id": allList[a].slotID });

            
            if (checkUser.length == 1 && checkLawyer.length == 1 && checkSlot.length == 1) {
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

        }

        res.send(array);
    } catch (error) {
        res.send({ "Error": error })
    }
});



module.exports = { bookingRoute };