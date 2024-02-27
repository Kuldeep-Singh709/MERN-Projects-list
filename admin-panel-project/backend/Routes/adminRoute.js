const express =require("express");
const adminController  = require("../controllers/adminController");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

router.route("/users").get(authMiddleware, adminController.getAllUser);
router.route("/contacts").get(adminController.getAllContacts);
// router.route("/home").get(adminController.);


module.exports = router;