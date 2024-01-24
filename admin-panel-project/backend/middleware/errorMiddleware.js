
// errorMiddleware.js

const errorMiddleware = (err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode; //This line determines the status code to be sent in the response
    res.status(statusCode);
    res.json({
      success: false,
      message: err.message,
    //   stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
  };
  
  module.exports = errorMiddleware;
  



// // errorMiddleware.js

// const errorMiddleware = (err, req, res, next) => {
//     const statusCode = err.status || 500;
//     const message = error.message || "BACKEND ERROR";

//     res.status(statusCode).json({
//       success: false,
//       message: err.message,
//     });
//   };
  
//   module.exports = errorMiddleware;
  


