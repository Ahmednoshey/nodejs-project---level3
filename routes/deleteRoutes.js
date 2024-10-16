const express = require('express')
const router = express.Router()
const deleteController = require("../controllers/deleteController")
const requireAuth = require('../middleware/middleware')
const checkIfUser = require('../middleware/userData')

router.delete("/edit/:id",requireAuth,checkIfUser, deleteController.deleteRoutes); 

router.delete("/:id", requireAuth,checkIfUser, deleteController.delete_Routes); 

module.exports = router