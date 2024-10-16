const express = require('express')
const router = express.Router()
const addController = require("../controllers/addController")
const requireAuth = require('../middleware/middleware')
const checkIfUser = require('../middleware/userData')
router.post("/user/add.html",requireAuth,checkIfUser,addController.addRouting);
module.exports = router
