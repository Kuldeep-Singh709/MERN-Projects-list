//Controllers.js


// const bcrypt = require("bcrypt");
const Patient = require("../models/patientModel");

exports.getAllpatient = async(req,res,next)=>{

    try {

        const patient = await Patient.find({});

         res.status(200).json({
            patient,
        });

        console.log("All Users :",patient);
    } catch (error) {
        console.log("Error Generated During Fetching 'All' patient Data ",error);
        return next(new Error("Fetching All Details of Patient Went Wrong..", 401));
    }
}




exports.RegisterApatient = async (req, res, next) => {
  try {
    // const { patientname, patientage, patientcontact, patientcondition, isBedAlloted } = req.body;

    // const { patientname,patientage,patientcondition,admissiontype,patientdoa,patientaddmissionreason,patientcontact,patientemergencycontactname,patientemergencycontactnumber,patientdob,patientgender,patientbloodgroup,patienttotalfees,patientadvancepayment,patientmedicalhistory,patientaddress,isHasInsurance,isBedAlloted }= req.body;
    
    const {patientName, patientAge, patientCondition, admissionType, patientDOA, patientAddmissionReason, patientContact, patientEmergencyContactName, patientEmergencyContactNumber, patientDOB, patientGender, patientBloodGroup, patientTotalFees, patientAdvancePayment, patientMedicalHistory, patientAddress, isHasInsurance, isBedAlloted }= req.body;

    // Check if required fields are present
    if (!patientName || !patientAge || !patientContact || !patientCondition) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields",
      });
    }

    // Create a new patient
    const patient = await Patient.create({
      // patientname,
      // patientage,
      // patientcontact,
      // patientcondition,
      // isBedAlloted,

      // patientname,
      // patientage,
      // patientcondition,
      // admissiontype,
      // patientdoa,
      // patientaddmissionreason,
      // patientcontact,
      // patientemergencycontactname,
      // patientemergencycontactnumber,
      // patientdob,
      // patientgender,
      // patientbloodgroup,
      // patienttotalfees,
      // patientadvancepayment,
      // patientmedicalhistory,
      // patientaddress,
      // isHasInsurance,
      // isBedAlloted,


      patientName,
      patientAge,
      patientCondition,
      admissionType,
      patientDOA,
      patientAddmissionReason,
      patientContact,
      patientEmergencyContactName,
      patientEmergencyContactNumber,
      patientDOB,
      patientGender,
      patientBloodGroup,
      patientTotalFees,
      patientAdvancePayment,
      patientMedicalHistory,
      patientAddress,
      isHasInsurance,
      isBedAlloted,
});

    res.status(201).json({
      success: true,
      message: "Patient registered successfully",
      patient,  // Return the created patient for confirmation
    });
  } catch (error) {
    console.error("Error at RegisterApatient:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};





exports.deleteSinglePatientByID= async(req,res,next)=>{

    try {
        
        const id = req.params.id;
        const deletedPatient = await Patient.findByIdAndDelete({_id:id});
        console.log("Patient Deleted Successfully",deletedPatient);
        res.status(200).json({message:"Patient Deleted Successfully"})
        
    } catch (error) {
        console.log("Error During Deleteing a User by Admin");        
    }
}

exports.getSinglePatientByID=async(req,res,next)=>{
    try {

        const id = req.params.id;
        const Patient = await Patient.findById({_id:id});
        res.status(200).json({Patient});

    } catch (error) {
        console.log("Error During Getting a Single Patient Data");
        res.status(404).json({error});
        }
}


exports.updatePatientByID=async(req,res,next)=>{

    try {

        const id = req.params.id;
        const updatePatientData = req.body;
    
        const changedPatientData = await User.updateOne({_id:id},{
            $set:updatePatientData,
        });
        
        return res.status(200).json(changedPatientData);
        
    } catch (error) {
        console.log("Error During Updateing or Editing a User Data by Admin");
        res.status(404).json({error});    
    }
}














