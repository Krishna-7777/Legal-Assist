
const secretKey = process.env.SECRETKEY;
var jwt = require('jsonwebtoken');
require('dotenv').config();
const { UsersModel } = require("../models/users");
const { LawyerModel } = require("../models/lawyers");

async function Authenication(req, res, next) {
    let token = req.headers.authorization;
    jwt.verify(token, secretKey, async (err, decoded) => {
        if (decoded) {
            let userData = await UsersModel.find({ "email": decoded.email });
            let lawyerData = await LawyerModel.find({ "email": decoded.email });
            if (userData.length == 1) {
                next();
            } else if(lawyerData.length == 1) {
                next();
            } else {
                res.send({'message': 'Not Authorized'})
            }
        } else {
            res.send([{ "message": "Not Authorized" }]);
        }
    });
}

module.exports = { Authenication };