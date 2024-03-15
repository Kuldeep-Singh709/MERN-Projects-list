const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// const express = require("express");
// const router = express.Router();


router.route("/signup").post(authController.signup);
router.route("/login").post(authController.login);
router.route("/logout").post(authController.logout);
// router.route("/signup").post(authController.signup);

// router.post("/signup", authController.signup);

// router.route("/").get(authController.Home);
// router.route("/auth/login").post(authController.userLogin);
// router.route("/userdata").get(authMiddleware,authController.userDetails)


module.exports = router;





// const express = require("express");
// const router = express.Router();
// const authController = require("../controllers/authController");

// router.post("/signup", authController.signup); // Use router.post instead of router.route

// module.exports = router;
