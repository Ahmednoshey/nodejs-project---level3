
const Mydata = require("../models/MydataSchema");

const viewRoutes = (req, res) => {
  Mydata.findById(req.params.id)
  .then((result) => {res.render("user/view",{obj:result})})
  .catch((err) => {console.log(err)})
 }




module.exports = {viewRoutes}