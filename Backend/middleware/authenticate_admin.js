
const secretKey = process.env.SECRETKEY;
var jwt = require('jsonwebtoken');
require('dotenv').config();
const { AdminModel } = require("../models/admin");

async function AuthenicateAdmin(req, res, next) {
    let token = req.headers.authorization;
    jwt.verify(token, secretKey, async (err, decoded) => {
        if (decoded) {
            let lawyerData = await AdminModel.find({ "email": decoded.email });
            if (lawyerData.length == 1) {
                next();
            }
        } else {
            res.send([{ "message": "Not Authorized" }]);
        }
    });
}

module.exports = { AuthenicateAdmin };