const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

// const path = require("path");
// const cookieParser = require("cookie-parser");

//import Route
  const authRoute = require("./Routes/authRoute");




dotenv.config({ path:"backend/config/config.env" });


app.use(express.json()); //When you send data to the server through an HTTP POST request with a JSON payload,
                        //  the express.json() middleware parses the JSON data and makes it available in the req.body object of the route handlers.
// app.use(cookieParser());

app.use("/api/v1",authRoute);



connectDatabase();

app.listen(process.env.PORT, (err) => {
  if (err) {
    console.error("Server error:", err);
  } else {
    console.log(`Server is working on http://localhost:${process.env.PORT}`);
  }
});
