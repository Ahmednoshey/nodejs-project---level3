
const AuthUser = require("../models/SignupSchema");
var jwt = require("jsonwebtoken");
const addRouting = (req, res) => {
  var decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
  AuthUser.updateOne({_id:decoded.id},{ $push: {
     Data_Info:{
      Customer: req.body.Customer,
      price: req.body.price,
      Bank: req.body.Bank,
      Branch: req.body.Branch,
      First_Date: req.body.First_Date,
      Second_Date: req.body.Second_Date,
      Info: req.body.Info,
      createdAt:new Date()
     } 
    } })
     .then( result => {
     res.redirect("/home");
     })
  .catch( err => {
   console.log(err);
   });
   }
module.exports = {addRouting}




