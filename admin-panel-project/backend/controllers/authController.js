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

exports.Register = async (req, res) => {
  try {
    console.log("User Input:", req.body);
    const { username, email, password, phone } = req.body;

    //Hashing the Password using Bcrypt.js(only two methods Hash()/compare())
    // const hash_password = await bcrypt.hash(password, 10);

    //Check Email Exist or Not
    const emailCheck = await User.findOne({ email });
    if (!emailCheck) {
      const user = User.create({
        username,
        email,
        password,
        phone,
      });

      res.status(201).json({
        success: true,
        message: "User Register Successfully",
      });
    } else {
      res.status(406).json({
        success: false,
        message: "User is Already Register(Register Email) ",
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error on Register Page",
    });
  }
};
