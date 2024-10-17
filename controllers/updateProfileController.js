require('dotenv').config()
const cloudinary = require('cloudinary').v2
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_NAME, 
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET 
});
var jwt = require("jsonwebtoken");
const AuthUser = require("../models/SignupSchema");
const updateProfileRouter = (req, res, next) => {
  cloudinary.uploader.upload(req.file.path, {folder:"cheque-system/pofileimg"},async  (error, result)=>{
    if (result) {
      var decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
    const profileImg = await  AuthUser.updateOne({_id: decoded.id}, {profileImage: result.secure_url})
    res.redirect("/home")
  }
  });
}
module.exports = {updateProfileRouter}