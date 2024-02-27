const User = require("../models/userModel")
const Contact = require("../models/contactModel");

exports.getAllUser = async(req,res,next)=>{

    try {

        const users = await User.find({},{password:0});

        if(!users || users.length===0){
            return res.status(404).json({success:false, message:"Users Not Found(Currently No User Register)"});
        }

         res.status(200).json({
            // success:true,
            // message:"All the Register Users",
            users,
        });

        console.log("All Users :",users);
    } catch (error) {
        console.log("Error Generated During Fetching 'All' User Data ",error);
        return next(new Error("Fetching All User's Went Wrong..", 401));
    }
}

exports.getAllContacts= async(req,res,next)=>{

    try {

        const contactMessage = await Contact.find();

        if(!contactMessage || contactMessage.length===0){
            return res.status(404).json({success:false, message:"Not a Single User Send a Contact Message"});
        }

        res.status(200).json({
            success:true,
            message:"All Contact Message's",
            contactMessage,
        });
        
    } catch (error) {
        console.log("Error Generated During Fetching 'All' User Contact Message ",error);
        return next(new Error("Fetching Contacts Message Went Wrong..", 401));
    }
}

exports.deleteSingleUser=(req,res,next)=>{

    try {
        
        
    } catch (error) {
        console.log("Error During Deleteing a User",error);
        
    }
}