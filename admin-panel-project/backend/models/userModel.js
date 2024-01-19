const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

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
    select: false,
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

module.exports = mongoose.model("User", userSchema);
