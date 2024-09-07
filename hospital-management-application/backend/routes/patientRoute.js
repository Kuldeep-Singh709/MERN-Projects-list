//Routes


const express = require("express");
const router = express.Router();
const patientController = require("../controllers/patientController");
// const patientMiddleware = require("../middleware/patientMiddleware");


router.route("/").get(patientController.getAllpatient);
router.route("/patientregister").post(patientController.RegisterApatient);
router.route("/deletepatient/:id").delete(patientController.deleteSinglePatientByID);
router.route("/getsinglepatient/:id").get(patientController.getSinglePatientByID);
router.route("/updatepatient/:id").patch(patientController.updatePatientByID);




module.exports = router;











