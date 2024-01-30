// controllers/authController.js
const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
class AuthController {
  generateToken(req, res) {
    const user = {
      userId: 123,
      username: "john_doe",
    };

    const token = userModel.generateToken(user);
    res.json({ token });
  }

  verifyToken(req, res) {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ error: "Unauthorized - Token not provided" });
    }

    jwt.verify(token, "random", (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: "Unauthorized - Invalid token" });
      }

      res.json({ decoded });
    });
  }
}

module.exports = new AuthController();
