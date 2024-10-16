const express = require('express')
const router = express.Router()
const Mydata = require("../models/MydataSchema");
const searchController = require("../controllers/searchController")
const requireAuth = require('../middleware/middleware')
const checkIfUser = require('../middleware/userData')

// search

router.post("/search",requireAuth,checkIfUser,searchController.searchRoutes);
router.post("/Search_Branch",requireAuth,checkIfUser, searchController.search_Routes);

module.exports = router 