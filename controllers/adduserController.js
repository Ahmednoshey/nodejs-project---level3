const {validationResult } = require("express-validator");
var jwt = require("jsonwebtoken");
const AuthUser = require("../models/SignupSchema");
const addUserRoutes = async (req, res) => {
  try {
    const objError = validationResult(req);
    if (objError.errors.length > 0) {
      return   res.json(   { arrValidationError: objError.errors }    ) 
    }
    const isCurrentEmail = await AuthUser.findOne({Email: req.body.Email})
    if (isCurrentEmail) {
      return   res.json(  {existEmail: "Email already exist, Try to Login"  }   )  
    }
    const newUser  = await AuthUser.create(req.body);
    var token = jwt.sign({ id: newUser._id }, process.env.JWTSECRET_KEY);
    res.cookie("jwt", token, { httpOnly: true, maxAge: 86400000 });
    res.json(   {id: newUser._id}     )
  } catch (error) {
    console.log(error);
  }
}
module.exports = {addUserRoutes}