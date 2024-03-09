const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const protectRoute = require("../middleware/protectRoute");


router.route("/").get( protectRoute,userController.getUsersForSidebar);

module.exports = router;



