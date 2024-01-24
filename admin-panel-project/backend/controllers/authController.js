const bcrypt = require("bcrypt");
const User = require("../models/userModel");
// const Error = require("../middleware/errorMiddleware");


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
// Register To a User
exports.Register = async (req, res,next) => {
  try {
    // console.log("User Input:", req.body);
    const { username, email, password, phone } = req.body;

    //Hashing the Password using Bcrypt.js(only two methods Hash()/compare())
    // const hash_password = await bcrypt.hash(password, 10);

    //Check Email Exist or Not
    const emailExist = await User.findOne({ email });

    console.log("User Input:", req.body);

    if (emailExist) {
      return res.status(406).json({
        success: false,
        message: "User is Already Register(Register Email) ",
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
    return next(new Error(error.message,400));
  }
};

// Login to a User

exports.userLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

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

