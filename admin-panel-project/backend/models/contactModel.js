const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({

    username:{
       type:String,
        require:[true,"Please Enter Your userName on Contact-Page" ],
        unique:true,
    },
    email:{
        type:String,
        require:[true,"Please Enter Your Email on Contact Page"],
        unique:true
    },
    message:{
        type:String,
        require:true,
    }


});

module.exports = mongoose.model("Contact",contactSchema);