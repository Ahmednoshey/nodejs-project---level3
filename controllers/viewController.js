
const AuthUser = require("../models/SignupSchema");
const viewRoutes = (req, res) => {
  AuthUser.findOne({ "Data_Info._id": req.params.id })
  .then((result) =>{
    const selectObject = result.Data_Info.find((item) => {
    return  item._id == req.params.id
    })
    res.render("user/view",{obj:selectObject})})
  .catch((err) => {console.log(err)})
 }
module.exports = {viewRoutes}