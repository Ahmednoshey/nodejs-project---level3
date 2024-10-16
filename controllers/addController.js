
const Mydata = require("../models/MydataSchema");
const addRouting = (req, res) => {
  Mydata.create(req.body)
     .then( result => {
     res.redirect("/home");
     })
  .catch( err => {
   console.log(err);
   });
   }
module.exports = {addRouting}




