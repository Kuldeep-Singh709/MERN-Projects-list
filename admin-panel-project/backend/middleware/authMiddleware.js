const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");
  //if Token is not Valid or Not Avialable
  if (!token) {
    return res.status(401).json({
      success: "False",
      message: "Unauthorized HTTP, Token is Not Provided",
    });
  }

  //To Remove "Bearer" word Before The Token
  const jwtToken = token.replace("Bearer", "").trim();

  //TO Verify the Token
  try {
    const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);

    // console.log("isVerified>>>:",isVerified);

    const userData = await User.findOne({ email: isVerified.email }).select({
      password: 0,
    });
    // console.log("userData>>>:",userData);

    //Custom Property(Developer Define) of Request Object {now ,This custom property of request Object will be Available for All the Handler of the Code}
    req.user = userData;
    req.token = token;
    req.userID = userData._id;

    next();
  } catch (error) {
    return res.status(401).json({
      success: "False",
      message: "Unauthorized HTTP, Token is Not Provided",
    });
  }
};

module.exports = authMiddleware;
