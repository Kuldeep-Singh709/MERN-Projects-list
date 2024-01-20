const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: [true, "Please Enter Your Name"],
  },
  email: {
    type: String,
    require: [true, "Please ENter Your Email"],
    unique: true,
  },
  password: {
    type: String,
    require: [true, "Please Enter Password"],
    // select: false,
  },
  phone: {
    type: Number,
    require: [true, "Please Enter Your Mobile Number"],
  },
  role: {
    type: String,
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

userSchema.methods.comparePassword = function (password) {
    return new Promise((resolve, reject) => {
      bcrypt.compare(password, this.password, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  };
  

// userSchema.methods.comparePassword = async function (password) {
//     return await bcrypt.compare(password, this.password);
//   }; //Do Not Use Arrow Function BZ "Arrow" function does not have "This" keyword
  

//JWT Token (JWT always Has three part Hearder,Payload,Signature)and (we Always created Payload and Signature inside the .SIGN() method)

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
