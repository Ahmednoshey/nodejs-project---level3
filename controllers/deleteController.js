const AuthUser = require("../models/SignupSchema");
var jwt = require("jsonwebtoken");
const deleteRoutes = (req, res) => {
  var decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
  AuthUser.updateOne({ _id: decoded.id },{ $pull: { Data_Info: {_id:req.params.id }} })
.then((result) => {res.redirect("/home")})
.catch((err) => {console.log(err)})
}
const delete_Routes = (req, res) => {
  AuthUser.updateOne({ "Data_Info._id": req.params.id },{ $pull: { Data_Info: {_id:req.params.id }} })
  .then((result) => {res.redirect("/home")})
  .catch((err) => {console.log(err)})
  }
  module.exports ={deleteRoutes,delete_Routes}