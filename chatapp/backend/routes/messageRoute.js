const express = require("express");
const router = express.Router();
const messageController = require("../controllers/messageController");
const protectRoute = require("../middleware/protectRoute");


router.route("/get/:id").get(protectRoute, messageController.getMessages);
router.route("/send/:id").post(protectRoute, messageController.sendMessage);

module.exports = router;



