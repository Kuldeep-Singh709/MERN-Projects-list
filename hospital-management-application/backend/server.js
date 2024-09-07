
//Server.js

const express = require("express");
const app = express();
// const cors = require('cors');  
const dotenv = require("dotenv");
const PORT = 8000;

const connectDatabase = require("./config/database");




const patientRoute = require("./routes/patientRoute");

dotenv.config({ path:"backend/config/config.env" });

// Configure CORS
// const corsOptions = {
//     origin: 'http://localhost:3000',  
//     methods: 'GET,POST,PATCH,DELETE',
//     allowedHeaders: 'Content-Type,Authorization',
// };

// app.use(cors(corsOptions)); 


app.use(express.json()); 


app.use("/api/v1",patientRoute);



connectDatabase();


// app.listen(process.env.PORT, (err) => {
app.listen(PORT, (err) => {
  if (err) {
    console.error("Server error:", err);
  } else {
    console.log(`Server is working on http://localhost:${PORT}`);
  }
});

