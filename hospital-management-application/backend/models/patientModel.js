//Model or Schema

const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({

  patientname: {
    type: String,
    required: [true, "Please Enter Patient Name"],
  },
  patientage:{
   type: String,
   required: [true, " Enter Age of patient"],
  },
  patientcondition:{
    type: String,
    required: [true, " Enter Condition of Patient"],
  },
  patientcontact:{
    type: String,
    required: [true, " Enter Contact number of patient"],
  },
isBedAlloted: {
    type: Boolean,
    default: false,
  },
})

module.exports = mongoose.model("Patient", patientSchema);









