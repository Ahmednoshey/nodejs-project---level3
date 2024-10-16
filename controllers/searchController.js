const AuthUser = require("../models/SignupSchema");
var jwt = require("jsonwebtoken");
const searchRoutes = (req, res) => {
  var decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
  AuthUser.findOne({_id: decoded.id})
  .then((result) =>{
    const searchDate = result.Data_Info.filter((item) => {
      return  item.Second_Date.includes(req.body.Search_Date)  
      })
    res.render("user/search",{arr:searchDate})})
  .catch( err => {
   console.log(err);
   });
   }
   const search_Routes = (req, res) => {
    var decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    AuthUser.findOne({ _id: decoded.id })
    .then((result) =>{
      const searchDateBranch = result.Data_Info.filter((item) => {
        return  item.Second_Date.includes(req.body.Search_Date)  && item.Branch.includes(req.body.Search_Branch) 
      })
      res.render("user/search",{arr:searchDateBranch})})
    .catch( err => {
     console.log(err);
     });
     }  
module.exports = {searchRoutes,search_Routes}