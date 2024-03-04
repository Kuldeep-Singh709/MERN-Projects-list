const express =require("express");
const adminController  = require("../controllers/adminController");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

router.route("/users").get(authMiddleware,adminMiddleware, adminController.getAllUser);
router.route("/users/contacts").get(authMiddleware,adminMiddleware, adminController.getAllContacts);
router.route("/users/contact/delete/:id").delete(authMiddleware,adminMiddleware, adminController.deleteSingleContactByID);
router.route("/user/delete/:id").delete(authMiddleware,adminMiddleware, adminController.deleteSingleUserByID);
router.route("/users/singleuser/:id").get(authMiddleware,adminMiddleware,adminController.getSingleUserByID);
router.route("/user/update/:id").patch(authMiddleware,adminMiddleware,adminController.updateUserByID);


module.exports = router;