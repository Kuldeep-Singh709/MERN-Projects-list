const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");



router.route("/").get(authController.Home);

router.route("/register").post(authController.Register);
router.route("/login").post(authController.userLogin);

module.exports = router;
