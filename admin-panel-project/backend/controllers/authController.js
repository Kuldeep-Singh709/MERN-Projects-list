const bcrypt = require("bcrypt");
const User = require("../models/userModel");

exports.Home = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Welcome to HOME Page",
    });
  } catch (error) {
    res.send(400).json({
      success: false,
      message: "Error encounter at Home Page",
    });
  }
};
// Register To a User
exports.Register = async (req, res) => {
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
    console.log(error.message);
    res.status(400).json({
      success: false,
      message: error.message ,
    });
  }
};

// Login to a User

exports.userLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(401)
        .json({ Message: "Invalid Input Data, User is Not Found " });
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
     console.log(error.message);
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};

