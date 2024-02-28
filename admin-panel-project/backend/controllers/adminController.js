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

exports.deleteSingleUserByID= async(req,res,next)=>{

    try {
        
        const id = req.params.id;
        const deletedUser = await User.findByIdAndDelete({_id:id});
        console.log("User Deleted Successfully",deletedUser);
        res.status(200).json({message:"user Deleted Successfully"})
        
    } catch (error) {
        console.log("Error During Deleteing a User by Admin",error);
        
    }
}


exports.getSingleUserByID=async(req,res,next)=>{
    try {

        const id = req.params.id;
        const user = await User.findById({_id:id},{password:0});
        res.status(200).json({user});

    } catch (error) {
        console.log("Error During Getting a Single User Data by Admin",error);
        res.status(404).json({error});
    }
}


exports.updateUserByID=async(req,res,next)=>{

    try {

        const id = req.params.id;
        const updateUserData = req.body;
    
        const changedUserData = await User.updateOne({_id:id},{
            $set:updateUserData,
        });
        
        return res.status(200).json(changedUserData);
        
    } catch (error) {
        console.log("Error During Updateing or Editing a User Data by Admin",error);
        res.status(404).json({error});    
    }
}