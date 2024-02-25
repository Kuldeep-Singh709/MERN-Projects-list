const express =require("express");
const { serviceLogic } = require("../controllers/serviceController");
const router = express.Router();

router.route("/service").get(serviceLogic);

module.exports =router;