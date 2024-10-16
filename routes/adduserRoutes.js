
const express = require('express')
const router = express.Router()
const { check } = require("express-validator");
const adduserController = require("../controllers/adduserController")
router.post("/register", [
  check("UserName","UserName must be at least 8 characters").matches(/[0-9A-Za-z]{8}/),
   check("Email", "Please provide a valid email").isEmail(),
   check("Password", "Password must be at least 8 characters with 1 upper case letter and 1 number").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/),
],adduserController.addUserRoutes);
module.exports = router