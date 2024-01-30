// app.js
const express = require("express");
const cors = require("cors");

const app = express();

const authController = require("./controllers/authController");

app.use(cors());

app.get("/generateToken", authController.generateToken);
app.get("/verifyToken", authController.verifyToken);

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
