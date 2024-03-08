const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const connectDatabase = require("./config/database");
const errorMiddleware = require("./middleware/errorMiddleware");

// const path = require("path");
// const cookieParser = require("cookie-parser");

//import Route
  const authRoute = require("./Routes/authRoute");
  const contactRoute = require("./Routes/contactRoute");
  const serviceRoute = require("./Routes/serviceRoute");
  const adminRoute = require("./Routes/adminRoute");


dotenv.config({ path:"backend/config/config.env" });

//Handle Cors
const corsOptions = {
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
  // origin: '*',
  methods:"GET, POST, PUT, DELETE, PATCH, HEAD",
  Credentials:true,
  optionsSuccessStatus: 200 ,
}

app.use(cors(corsOptions));

app.use(express.json()); //When you send data to the server through an HTTP POST request with a JSON payload,
                        //  the express.json() middleware parses the JSON data and makes it available in the req.body object of the route handlers.
// app.use(cookieParser());

app.use("/api/v1",authRoute);
app.use("/api/v2",contactRoute);
app.use("/api/v3",serviceRoute);
//Admin Routes
app.use("/api/admin",adminRoute);



connectDatabase();

app.use(errorMiddleware);


app.listen(process.env.PORT, (err) => {
  if (err) {
    console.error("Server error:", err);
  } else {
    console.log(`Server is working on http://localhost:${process.env.PORT}`);
  }
});



