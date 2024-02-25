const Service = require("../models/serviceModel");

exports.serviceLogic= async(req,res,next)=>{
    try {
        const response = await Service.find();
        if(!response){
           return res.status(404).json({message:"Sevice Not Found"});
        }
        res.status(200).json({
            success:true,
            message:"Service Data Succesfully Fethecd",
            response,
        }); 

    } catch (error) {
        console.log("Error in Service Controller ",error);
    }
}