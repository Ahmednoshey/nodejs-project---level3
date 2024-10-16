const express = require('express')
const router = express.Router()
const viewController = require("../controllers/viewController");
const requireAuth = require('../middleware/middleware')
const checkIfUser = require('../middleware/userData')
router.get("/view/:id",requireAuth,checkIfUser, viewController.viewRoutes);




module.exports = router