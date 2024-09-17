//Model or Schema

const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({

//   patientname: {
//     type: String,
//     required: [true, "Please Enter Patient Name"],
//   },
//   patientage:{
//    type: String,
//    required: [true, " Enter Age of patient"],
//   },
//   patientcondition:{
//     type: String,
//     required: [true, " Enter Condition of Patient"],
//   },
//   patientcontact:{
//     type: String,
//     required: [true, " Enter Contact number of patient"],
//   },
// isBedAlloted: {
//     type: Boolean,
//     default: false,
//   },


//   patientBloodGroup, patientTotalFees, patientAdvancePayment, patientMedicalHistory, patientAddress, isHasInsurance, isBedAlloted }= req.body;





patientName: {
  type: String,
  required: [true, 'Patient name is required'],
},
patientAge: {
  type: Number,
  required: [true, 'Patient age is required'],
},
patientCondition: {
  type: String,
  // enum: ['Normal', 'Critical', 'Stable', 'Serious','Emergency'],
  set: value => value.toLowerCase(),
  required: [true, 'Patient condition is required'],
},
admissionType: {
  type: String,
  // enum: ['Emergency', 'Scheduled', 'Referral','Observation','Transfer','Urgent'],
  set: value => value.toLowerCase(),
  required: [true, 'Admission type is required'],
},
patientDOA: {
  type: Date,
  required: [true, 'Date of Admission (DOA) is required'],
},
patientAddmissionReason: {
  type: String,
  required: [true, 'Reason for Admission is required'],
},
patientContact: {
  type: String,
  required: [true, 'Patient contact number is required'],
    match: [/^\d{10}$/, 'Please enter a valid contact number'],
},
patientEmergencyContactName: {
  type: String,
  required: [true, 'Emergency contact name is required'],
},
patientEmergencyContactNumber: {
  type: String,
  required: [true, 'Emergency contact number is required'],
  match: [/^\d{10}$/, 'Please enter a valid emergency contact number'],
},
patientDOB: {
  type: Date,
  required: [true, 'Patient date of birth is required'],
},
patientGender: {
  type: String,
  // enum: ['Male', 'Female', 'Other'],
  set: value => value.toLowerCase(),
  required: [true, 'Patient gender is required'],
},
patientBloodGroup: {
  type: String,
  // enum: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
  set: value => value.toUpperCase(),
  required: [true, 'Patient blood group is required'],
},
patientTotalFees: {
  type: Number,
  required: [true, 'Total hospital fees is required'],
},
patientAdvancePayment: {
  type: Number,
  required: [true, 'Advance payment is required'],
},
patientMedicalHistory: {
  type: String,
  default: 'No medical history',
},
patientAddress: {
  type: String,
  required: [true, 'Patient address is required'],
},
isHasInsurance: {
  type: Boolean,
  default: false,
},
isBedAlloted: {
   type: Boolean,
    default: false,
   },

})

module.exports = mongoose.model("Patient", patientSchema);









