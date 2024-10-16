const AuthUser = require("../models/SignupSchema");
const updateRoutes = (req, res) => {
  AuthUser.findOne({ "Data_Info._id": req.params.id })
  .then((result) =>{
    const selectObject = result.Data_Info.find((item) => {
      return  item._id == req.params.id
      })
    res.render("user/edit",{obj:selectObject})})
  .catch((err) => {console.log(err)})
}
const update_Routes = (req, res) => {
  AuthUser.updateOne({ "Data_Info._id": req.params.id },{ "Data_Info.$" : req.body })
  .then((result) => {res.redirect("/home")})
  .catch((err) => {console.log(err)})
  }
module.exports = {updateRoutes,update_Routes}