// models/userModel.js
const jwt = require("jsonwebtoken");

class UserModel {
  generateToken(user) {
    return jwt.sign(user, "random", { expiresIn: "1h" });
  }
}

module.exports = new UserModel();
