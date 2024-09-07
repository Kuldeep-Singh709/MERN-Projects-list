//Controllers.js


// const bcrypt = require("bcrypt");
const User = require("../models/patientModel");

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




exports.RegisterApatient = async(req,res,next)=>{

    try {

        const { patientname, patientage, patientcontact,isBedAlloted } = req.body;


        const user = await Patient.create({ patientname, patientage, patientcontact,isBedAlloted  });
  
        res.status(201).json({
          success: true,
          message: "patient Register Successfully", 
        });

    } catch (error) {
        console.error('error at AuthController Catch');
        return res.status(500).json({
          success: false,
          message: "Internal Server Error",
        });
    }
}




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














