// const express = require("express");
// const app = express();
// const cors = require('cors');
// const dotenv = require("dotenv");
// const PORT = 8000;
// const connectDatabase = require("./config/database");
// const patientRoute = require("./routes/patientRoute");

// dotenv.config({ path: "backend/config/config.env" });

// // Custom Middleware for setting CORS headers
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5173');  // Allow your frontend's origin
//   res.header('Access-Control-Allow-Credentials', 'true');  // Allow cookies to be sent
//   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');  // Allowed methods
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');  // Allowed headers
//   next();
// });

// // Handle preflight (OPTIONS) requests for all routes
// app.options('*', (req, res) => {
//   res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5173');  // Make sure the preflight request is allowed
//   res.header('Access-Control-Allow-Credentials', 'true');
//   res.sendStatus(200);
// });

// // Use the CORS middleware with additional options if needed
// const corsOptions = {
//   origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
//   methods: "GET, POST, PUT, DELETE, PATCH, OPTIONS",
//   credentials: true,
//   optionsSuccessStatus: 200
// };
// app.use(cors(corsOptions));

// app.use(express.json());  // Middleware to parse JSON

// app.use("/api/v1", patientRoute);  // Your routes

// connectDatabase();  // Connect to the database

// app.listen(PORT, (err) => {
//   if (err) {
//     console.error("Server error:", err);
//   } else {
//     console.log(`Server is working on http://localhost:${PORT}`);
//   }
// });




const express = require("express");
const app = express();
const cors = require('cors');
const dotenv = require("dotenv");
const PORT = 8000;
const connectDatabase = require("./config/database");
const patientRoute = require("./routes/patientRoute");

dotenv.config({ path: "backend/config/config.env" });

// Use the CORS middleware with defined options
const corsOptions = {
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],  // Frontend origins
  methods: "GET, POST, PUT, DELETE, PATCH, OPTIONS",
  credentials: true,  // Allow cookies to be sent
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));  // Use CORS middleware

// Middleware to parse JSON requests
app.use(express.json());

// Handle preflight (OPTIONS) requests for all routes
app.options('*', cors(corsOptions));  // Preflight handler

// Define your routes
app.use("/api/v1", patientRoute);

// Connect to the database
connectDatabase();

// Start the server
app.listen(PORT, (err) => {
  if (err) {
    console.error("Server error:", err);
  } else {
    console.log(`Server is working on http://localhost:${PORT}`);
  }
});
