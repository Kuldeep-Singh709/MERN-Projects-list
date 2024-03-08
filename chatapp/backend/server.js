const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

const authRoute = require("./routes/authRoute");
const userRoute = require("./routes/userRoute");
const messageRoute = require("./routes/messageRoute");


const DataBaseConnection = require("./config/dataBase");

const app = express();
const PORT = process.env.PORT || 5000;



// dotenv.config();
dotenv.config({ path:"backend/config/Config.env" });


app.use(express.json());
app.use(cookieParser());


app.use("/api/auth", authRoute);
app.use("/api/messages", messageRoute);
// app.use("/api/users", userRoute);




app.listen(PORT, () => {
    DataBaseConnection();
    console.log(`Server Running on port ${PORT}`);
});
