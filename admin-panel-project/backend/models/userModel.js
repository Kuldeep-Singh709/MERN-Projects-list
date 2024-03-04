const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please Enter Your Name"],
    maxLength: [30, "User Name cannot exceed upto 30 characters"],
    minLength: [4, "User Name should have more than 4 characters"],
  },
  email: {
    type: String,
    required: [true, "Email is Required"],
    unique: true,
    maxLength: [30, "Email cannot exceed 30 characters"],
    minLength: [4, "Email should have more than 4 characters"],
    // validate: [validator.isEmail, "Please Enter a valid Email"],
  },
  phone: {
    // type: Number,
    type: String,
    required: [true, "Contact Number Required"],
    minLength: [9, "Phone Number should have more than 9 characters"],
    maxLength: [15, "Phone Number cannot exceed 15 characters"],
  },
   password: {
    type: String,
    required: [true, "Password is Required"],
    minLength: [8, "Password should be greater than 8 characters"],
    // select: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

//Hasing Password using ".Pre" Method
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  try {
    this.password = await bcrypt.hash(this.password, 10);
  } catch (error) {
    next(error);
  }
});

//Compare Hashed Password using compare() method

userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
}; //Do Not Use Arrow Function Here BZ "Arrow" function does not have "This" keyword

//JWT Token (JWT always Has three part Hearder,Payload,Signature)and (we Always created Payload and Signature inside the .SIGN() method

userSchema.methods.generateJWTToken = async function () {
  try {
    return jwt.sign(
      {
        //JWT Payload
        userid: this._id.toString(),
        email: this.email,
        role: this.role,
      },

      process.env.JWT_SECRET_KEY, //JWT Signature

      {
        expiresIn: process.env.JWT_EXPIRE,
        
      }
    );
  } catch (error) {
    console.error(error);
  }
};

module.exports = mongoose.model("User", userSchema);
