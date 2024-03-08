// const mongoose = require("mongoose");


// const DataBaseConnection = () => {
//     mongoose.connect(process.env.DB_URI)
//     .then(() => {
//       console.log(`MongoDB connected successfully`);
//     // console.log(`Mongodb connected with server: ${data.connection.host}`);
//     })
//     .catch((error) => {
//       console.error(`Error in database connection: ${error}`);
//     });
//   };
  

// module.exports = DataBaseConnection;


const mongoose = require("mongoose");


const DataBaseConnection =()=>{

  mongoose.connect(process.env.DB_URI).then((data)=>{
    // console.log(`Mongodb connected with server: ${data.connection.host}`);
    console.log(`Mongodb connected with server: ${data.connection.host}`);
  }).catch((error)=>{
     console.log(`Error generated in DataBase Connection ${error}`);
  })
}

module.exports = DataBaseConnection;
