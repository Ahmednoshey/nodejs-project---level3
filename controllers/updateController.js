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
  AuthUser.updateOne({ "Data_Info._id": req.params.id },{
     "Data_Info.$.Customer" : req.body.Customer,
     "Data_Info.$.price" : req.body.price,
     "Data_Info.$.price2" : req.body.price2,
     "Data_Info.$.Bank" : req.body.Bank,
     "Data_Info.$.Branch" :  req.body.Branch,
     "Data_Info.$.Memory" : req.body.Memory,
     "Data_Info.$.First_Date" : req.body.First_Date,
     "Data_Info.$.Second_Date" :  req.body.Second_Date,
     "Data_Info.$.Info" : req.body.Info,
     "Data_Info.$.updatedAt" : new Date(),
    })
  .then((result) => {res.redirect("/home")})
  .catch((err) => {console.log(err)})
  }
module.exports = {updateRoutes,update_Routes}