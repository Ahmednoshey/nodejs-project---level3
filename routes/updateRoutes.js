const express = require('express')
const router = express.Router()
const updateController = require("../controllers/updateController");
const requireAuth = require('../middleware/middleware');
const checkIfUser = require('../middleware/userData');

router.get("/edit/:id",requireAuth,checkIfUser, updateController.updateRoutes);



router.put("/edit/:id",requireAuth,checkIfUser, updateController.update_Routes);




module.exports = router