const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({

    username:{
       type:String,
        required:[true,"Please Enter Your userName on Contact-Page" ],
        // unique:true,
    },
    email:{
        type:String,
        required:[true,"Please Enter Your Email on Contact Page"],
        // unique:true
    },
    message:{
        type:String,
        required:true,
    }
});
module.exports = mongoose.model("Contact",contactSchema);