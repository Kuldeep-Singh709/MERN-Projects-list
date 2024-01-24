const Contact = require("../models/contactModel");


exports.contactForm = async (req,res,next)=>{
try{
    
    const response = req.body;
    await Contact.create(response);
    res.status(200).json({
        success:true,
        message:"Message Register Successfully"
    });

}catch(error){
    return next(new Error("Message Register Faild",400));
}
}