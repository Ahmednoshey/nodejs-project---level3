
const AuthUser = require("../models/SignupSchema");
var jwt = require("jsonwebtoken");
const addRouting = (req, res) => {
  var decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
  AuthUser.updateOne({_id:decoded.id},{ $push: { Data_Info: req.body} })
     .then( result => {
     res.redirect("/home");
     })
  .catch( err => {
   console.log(err);
   });
   }
module.exports = {addRouting}




