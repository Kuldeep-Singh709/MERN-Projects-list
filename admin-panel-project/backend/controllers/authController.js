const bcrypt = require("bcrypt");
const User = require("../models/userModel");
// const Error = require("../middleware/errorMiddleware");

// --------------------------------------------------------------------------------------------------------
//Home Page Logic
// --------------------------------------------------------------------------------------------------------

exports.Home = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Welcome to HOME Page",
    });
  } catch (error) {
    return next(new Error("HomePage Error", 400));
  }
};

// --------------------------------------------------------------------------------------------------------
// Register To a User
// --------------------------------------------------------------------------------------------------------

exports.Register = async (req, res,next) => {
  try {
    // console.log("User Input:", req.body);
    const { username, email, password, phone } = req.body;

    //Hashing the Password using Bcrypt.js(only two methods Hash()/compare())
    // const hash_password = await bcrypt.hash(password, 10);

    if(!email.includes("@gmail.com")){
      return res.status(406).json({
        success:false,
        message:"Invaild Email Format",
      });
    }

    //Check Email Exist or Not
    const emailExist = await User.findOne({ email });

    console.log("User Input(Controller):", req.body);

    
    if (emailExist) {
      return res.status(406).json({
        success: false,
        message: "User is Already Register(Registered Email) ",
      });
    }
    const user = await User.create({ username, email, password, phone });

    const jwtToken = await user.generateJWTToken(); //Here We fetch JWT Token Which is genrated From the method of UserSchema

    res.status(201).json({
      success: true,
      message: "User Register Successfully", //Optional
      userID: user._id.toString(), //Optional
      jwtToken,
    });
  } catch (error) {
    // return next(new Error("User Registration Went Wrong..", 400));
    // return next(new Error(error.message,400));

    if (error.name === "ValidationError") {
      const cleanedErrors = [];
      
      for (let key in error.errors) {
          const errorMessage = error.errors[key].message.replace(`User validation failed: ${key}: `, '');
          cleanedErrors.push(errorMessage);
      }
      
      const errorMessageString = cleanedErrors.join('\n');
      // console.error('Validation Error:', errorMessageString);
      return res.status(400).json({
        success: false,
        message: errorMessageString,
      });
    } else {
      console.error('error at AuthController Catch:', error.message);
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  
  }
};
// --------------------------------------------------------------------------------------------------------
// Login to a User
// --------------------------------------------------------------------------------------------------------

exports.userLogin = async (req, res, next) => {
  // console.log("Inside UserLogin");
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    // console.log("find user");

    if (!user) {
      return next(new Error("Invalid Input Data, User is Not Found", 401));
     }

    const isCompareMatched = await user.comparePassword(password);

    if (!isCompareMatched) {
     console.log(error.message);
      return next(error.message );
    }

    res.status(200).json({
      success: true,
      message: "User Logged in",
      userID: user._id.toString(), //Optional
      Token: await user.generateJWTToken(), //JWT TOKEN
      // user,
    });

  } catch (error) {
  return next(new Error("Login Went Wrong..", 401));
  }
};


// --------------------------------------------------------------------------------------------------------
// Logic To get currntly Login "User" Data Based on "Login" info
// --------------------------------------------------------------------------------------------------------

exports.userDetails= async(req,res,next)=>{

try {
  const userData = req.user;
  // console.log("userData of authCOntroller:",userData);
  res.status(200).json({
    userData,
  })
} catch (error) {
  console.log("Error Occur During , to get User Info ased on Login Info",error);
}
}