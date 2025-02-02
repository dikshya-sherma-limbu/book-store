const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    required: true,
  },
});

// hash password before saving to database
userSchema.pre("save", async function (next) {
  // Check if the password field has been modified
  if (!this.isModified("password")) {
    // If not, call next() to proceed with saving the document

    return next();
  }
  // Hash the password before saving it to the database
  this.password = await bcrypt.hash(this.password, 12);
  next(); // Call next() to proceed with saving the document
});
const User = mongoose.model("User", userSchema);
module.exports = User;
