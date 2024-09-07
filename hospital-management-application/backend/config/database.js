//Database

const mongoose = require("mongoose");


const connectDatabase =()=>{

//   mongoose.connect(process.env.DB_URI).then((data)=>{
  mongoose.connect("mongodb://localhost:27017/Hospital-Management-Application").then((data)=>{
    console.log(`Mongodb connected with server`);
  }).catch((error)=>{
     console.log(`Error generated in DataBase Connection ${error}`);
  })
}

module.exports = connectDatabase;