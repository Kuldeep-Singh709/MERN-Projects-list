const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");



router.route("/").get(authController.Home);

router.route("/auth/register").post(authController.Register);
router.route("/auth/login").post(authController.userLogin);
router.route("/userdata").get(authMiddleware,authController.userDetails)
module.exports = router;
