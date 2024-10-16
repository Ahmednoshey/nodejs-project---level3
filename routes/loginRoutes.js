
const express = require('express')
const router = express.Router()
const loginController = require('../controllers/loginController')
router.post("/login",loginController.loginRoutes )
module.exports = router