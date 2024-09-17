//Routes


const express = require("express");
const router = express.Router();
const patientController = require("../controllers/patientController");
// const patientMiddleware = require("../middleware/patientMiddleware");


router.route("/").get(patientController.getAllpatient);
router.route("/auth/patientregister").post(patientController.RegisterApatient);
router.route("/auth/deletepatient/:id").delete(patientController.deleteSinglePatientByID);
router.route("/auth/getsinglepatient/:id").get(patientController.getSinglePatientByID);
router.route("/auth/updatepatient/:id").patch(patientController.updatePatientByID);




module.exports = router;











