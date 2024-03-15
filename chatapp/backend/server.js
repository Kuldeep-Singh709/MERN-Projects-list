const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const authRoute = require("./routes/authRoute");
const userRoute = require("./routes/userRoute");
const messageRoute = require("./routes/messageRoute");


const DataBaseConnection = require("./config/dataBase");

const app = express();
const PORT = process.env.PORT || 5000;



// dotenv.config();
dotenv.config({ path:"backend/config/Config.env" });


//Handle Cors
const corsOptions = {
    origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
    // origin: '*',
    methods:"GET, POST, PUT, DELETE, PATCH, HEAD",
    Credentials:true,
    optionsSuccessStatus: 200 ,
  }
  
  app.use(cors(corsOptions));


app.use(express.json());
app.use(cookieParser());


app.use("/api/auth", authRoute);
app.use("/api/messages", messageRoute);
app.use("/api/users", userRoute);



app.listen(PORT, () => {
    DataBaseConnection();
    console.log(`Server Running on port ${PORT}`);
});
