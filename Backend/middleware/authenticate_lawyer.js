
const secretKey = process.env.SECRETKEY;
var jwt = require('jsonwebtoken');
require('dotenv').config();
const { LawyerModel } = require("../models/lawyers");

async function AuthenicateLawyer(req, res, next) {
    let token = req.headers.authorization;
    jwt.verify(token, secretKey, async (err, decoded) => {
        if (decoded) {
            let lawyerData = await LawyerModel.find({ "email": decoded.email });
            if (lawyerData.length == 1) {
                next();
            }
        } else {
            res.send([{ "message": "Not Authorized" }]);
        }
    });
}

module.exports = { AuthenicateLawyer };