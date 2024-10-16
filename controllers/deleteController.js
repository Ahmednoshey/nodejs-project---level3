const Mydata = require("../models/MydataSchema");


const deleteRoutes = (req, res) => {
  Mydata.deleteOne({ _id: req.params.id })
.then((result) => {res.redirect("/home")})
.catch((err) => {console.log(err)})
}

const delete_Routes = (req, res) => {
  Mydata.findByIdAndDelete(req.params.id)
  .then((result) => {res.redirect("/home")})
  .catch((err) => {console.log(err)})
  }

  module.exports ={deleteRoutes,delete_Routes}