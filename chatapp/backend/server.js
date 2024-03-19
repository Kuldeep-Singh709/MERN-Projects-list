const path = require("path");
const express = require("express");
const dotenv = require('dotenv');
const cookieParser = require("cookie-parser");
const DataBaseConnection = require("./config/dataBase");
const { app, server } = require("./socket/socket");

const authRoute = require("./routes/authRoute");
const userRoute = require("./routes/userRoute");
const messageRoute = require("./routes/messageRoute");


dotenv.config(); // Load environment variables before accessing them

process.env.MONGO_DB_URI = "mongodb://localhost:27017/ChatApp";

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/messages", messageRoute);
app.use("/api/users", userRoute);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

server.listen(PORT, () => {
    DataBaseConnection();
    console.log(`Server Running on port ${PORT}`);
});






// // // const express = require("express");
// // const dotenv = require("dotenv");
// // const cookieParser = require("cookie-parser");
// // const cors = require("cors");

// // const authRoute = require("./routes/authRoute");
// // const userRoute = require("./routes/userRoute");
// // const messageRoute = require("./routes/messageRoute");


// // const DataBaseConnection = require("./config/dataBase");
// // const { app } = require("./scoket/socket");

// // // const app = express();
// // const PORT = process.env.PORT || 5000;



// // // dotenv.config();
// // dotenv.config({ path:"backend/config/Config.env" });


// // //Handle Cors
// // const corsOptions = {
// //     origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
// //     // origin: '*',
// //     methods:"GET, POST, PUT, DELETE, PATCH, HEAD",
// //     Credentials:true,
// //     optionsSuccessStatus: 200 ,
// //   }
  
// //   app.use(cors(corsOptions));


// // app.use(express.json());
// // app.use(cookieParser());


// // app.use("/api/auth", authRoute);
// // app.use("/api/messages", messageRoute);
// // app.use("/api/users", userRoute);



// // app.listen(PORT, () => {
// //     DataBaseConnection();
// //     console.log(`Server Running on port ${PORT}`);
// // });




















// const path = require("path");
// const express = require("express");
// const dotenv = require('dotenv');
// dotenv.config();
// const cookieParser = require("cookie-parser");


// const authRoute = require("./routes/authRoute");
// const userRoute = require("./routes/userRoute");
// const messageRoute = require("./routes/messageRoute");

// const DataBaseConnection = require("./config/dataBase");
// const { app,server } = require("./socket/socket");


// console.log("MongoDB URI:", process.env.MONGO_DB_URI);
// console.log("PORT:", process.env.PORT);


// const PORT = process.env.PORT || 3000;


// // dotenv.config();

// app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
// app.use(cookieParser());

// app.use("/api/auth", authRoute);
// app.use("/api/messages", messageRoute);
// app.use("/api/users", userRoute);

// app.use(express.static(path.join(__dirname, "/frontend/dist")));

// app.get("*", (req, res) => {
// 	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
// });

// server.listen(PORT, () => {
// 	DataBaseConnection();
// 	console.log(`Server Running on port ${PORT}`);
// });
