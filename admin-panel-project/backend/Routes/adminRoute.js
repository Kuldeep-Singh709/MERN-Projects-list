const express =require("express");
const adminController  = require("../controllers/adminController");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

router.route("/users").get(authMiddleware, adminController.getAllUser);
router.route("/users/contacts").get(authMiddleware, adminController.getAllContacts);
router.route("/user/delete/:id").delete(authMiddleware, adminController.deleteSingleUserByID);
router.route("/users/singleuser/:id").get(authMiddleware,adminController.getSingleUserByID);
router.route("/user/update/:id").patch(authMiddleware,adminController.updateUserByID);


module.exports = router;