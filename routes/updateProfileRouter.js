const express = require('express')
const router = express.Router()
const multer  = require('multer')
const upload = multer({storage: multer.diskStorage({})});
const updateProfileController = require("../controllers/updateProfileController")
router.post("/update-profile",upload.single('profileImg'),updateProfileController.updateProfileRouter);
module.exports = router