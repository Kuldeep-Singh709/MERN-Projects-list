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


// const mongoose = require("mongoose");


// const DataBaseConnection =()=>{

//   mongoose.connect(process.env.DB_URI).then((data)=>{
//     // console.log(`Mongodb connected with server: ${data.connection.host}`);
//     console.log(`Mongodb connected with server: ${data.connection.host}`);
//   }).catch((error)=>{
//      console.log(`Error generated in DataBase Connection ${error}`);
//   })
// }

// module.exports = DataBaseConnection;






const mongoose = require("mongoose");



process.env.MONGO_DB_URI = "mongodb://localhost:27017/ChatApp";

const DataBaseConnection = async () => {
	try {
		await mongoose.connect(process.env.MONGO_DB_URI);
		console.log("Connected to MongoDB");
	} catch (error) {
		console.log("Error connecting to MongoDB", error.message);
	}
};

module.exports = DataBaseConnection;







// const mongoose = require("mongoose");

// const DataBaseConnection = () => {
//     mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//       console.log(`MongoDB connected successfully`);
//     })
//     .catch((error) => {
//       console.error(`Error in database connection: ${error}`);
//     });
// };

// module.exports = DataBaseConnection;
