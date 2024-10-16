const Mydata = require("../models/MydataSchema");

const searchRoutes = (req, res) => {
  Mydata.find({Second_Date: req.body.Search_Date})
  .then((result) => {res.render("user/search",{arr:result})})
  .catch( err => {
   console.log(err);
   });
   }
   const search_Routes = (req, res) => {
    Mydata.find({ $and: [{Second_Date: req.body.Search_Date},{Branch: req.body.Search_Branch}]})
    .then((result) => {res.render("user/search",{arr:result})})
    .catch( err => {
     console.log(err);
     });
     }  
module.exports = {searchRoutes,search_Routes}