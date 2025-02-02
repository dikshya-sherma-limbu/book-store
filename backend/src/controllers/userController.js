const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET_KEY;
const getUser = async (req, res) => {
  const { username, password } = req.body;
  console.log("username", username);
  try {
    const admin = await User.findOne({ username });
    console.log(admin);
    if (!admin) {
      console.log("Admin not found");
      return res.status(404).json({ message: "Admin not found" });
    }
    if (password !== admin.password) {
      console.log("Invalid password");
      return res.status(401).json({ message: "Invalid password" });
    }
    const token = jwt.sign(
      {
        id: admin._id,
        username: admin.username,
        role: admin.role,
      },
      JWT_SECRET,
      { expiresIn: "1h" }
    );
    return res.status(200).json({
      message: "Admin logged in",
      token: token,
      user: {
        username: admin.username,
        role: admin.role,
      },
    });
  } catch (error) {
    console.log("failed to login as admin", error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getUser };
