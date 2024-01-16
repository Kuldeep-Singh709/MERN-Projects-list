const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    name:{
        type:String,
        require:[true,"Please Enter Your Name"],
    },
    email:{
        type:String,
        require:[true,"Please ENter Your Email"],
        unique:true,
    },
    password:{
        type:String,
        require:[true,"Please Enter Password"],
        select:false,
    }
});

module.exports = mongoose.model("User",userSchema);