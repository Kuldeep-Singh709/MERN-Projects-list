const mongoose = require("mongoose");


const connectDatabase =()=>{

  mongoose.connect(process.env.DB_URI).then((data)=>{
    console.log(`Mongodb connected with server: ${data.connection.host}`);
  }).catch((error)=>{
     console.log(`Error generated in DataBase COonnection ${error}`);
  })
}

module.exports = connectDatabase;


// mongoose.connect(process.env.DB_URI).then((data)=>{
//   console.log(`Mongodb connected with server: ${data.connection.host}`);
// })

// const mongoose = require("mongoose");
// const connectDatabase = () => {
//   mongoose
//     .connect(process.env.DB_URI)
//     .then((data) => {
//       console.log(`Mongodb connected with server: ${data.connection.host}`);
//     });
// };

// module.exports = connectDatabase;