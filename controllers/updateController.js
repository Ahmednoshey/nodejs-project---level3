const Mydata = require("../models/MydataSchema");

const updateRoutes = (req, res) => {
  Mydata.findById(req.params.id)
  .then((result) => {res.render("user/edit",{obj:result})})
  .catch((err) => {console.log(err)})
}



const update_Routes = (req, res) => {
  Mydata.findByIdAndUpdate(req.params.id, req.body)
  .then((result) => {res.redirect("/home")})
  .catch((err) => {console.log(err)})
  }



module.exports = {updateRoutes,update_Routes}