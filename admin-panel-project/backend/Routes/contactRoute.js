const express = require("express");
const { contactForm } = require("../controllers/contactController");
const router = express.Router();


router.route("/form/contact").post(contactForm);


module.exports = router;