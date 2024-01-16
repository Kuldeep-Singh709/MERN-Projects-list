const User = require("../models/userModel");


exports.Home = async(req,res)=>{
    try{
        res.status(200).json({
            success:true,
            message:"Welcome to HOME Page"
        })
    }catch(error){
        res.send(400).json({
            success:false,
            message:"Error encounter at Home Page"
        })
    }
}

exports.Register = async(req,res)=>{
    try{

        console.log("User Input:",req.body);
        // res.status(200).json({
        //     success:true,
        //     message:"Plese Register to Your-Self"
        // })
    const{name,email,password} = req.body;

    const user = User.create({
        name,email,password
    });

    res.status(201).json({
        success:true,
        message:"User Register Successfully"
    })

    }catch(error){
        res.status(400).json({
            success:false,
            message:"Error on Register Page"
        })
    }
}