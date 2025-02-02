const express = require("express");
const router = express.Router();
const { getSalesStat } = require("../controllers/adminController");

router.get("/", getSalesStat);

module.exports = router;
