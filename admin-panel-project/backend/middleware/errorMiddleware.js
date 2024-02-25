
// errorMiddleware.js


// errorMiddleware.js

// errorMiddleware.js

const errorMiddleware = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);

  if (err.name === 'ValidationError' && err.errors) {
      const cleanedErrors = [];
      
      for (let key in err.errors) {
          const errorMessage = err.errors[key].message.replace(`User validation failed: ${key}: `, '');
          cleanedErrors.push(errorMessage);
      }
      
      const errorMessageString = cleanedErrors.join('\n');
      console.error('Validation Error:', errorMessageString);
      return res.json({
          success: false,
          message: errorMessageString,
      });
  } else {
      console.error('Other Error:', err.message);
      console.error('Error Name:', err.name);
      console.error('Error Object:', err);
      return res.json({
          success: false,
          message: err.message,
      });
  }
};

module.exports = errorMiddleware;









// const errorMiddleware = (err, req, res, next) => {
//     const statusCode = res.statusCode === 200 ? 500 : res.statusCode; //This line determines the status code to be sent in the response
//     res.status(statusCode);
//     res.json({
//       success: false,
//       message: err.message,
//       // meg:"Error Hai Bhai",
//     //   stack: process.env.NODE_ENV === 'production' ? null : err.stack,
//     });
//   };
  
//   module.exports = errorMiddleware;
  



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
  


