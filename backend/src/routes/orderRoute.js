const express = require("express");

const router = express.Router();

const { createOrder } = require("../controllers/orderController");
// ORDER ENDPOINTS

// create an order
router.post("/create-order", createOrder);

module.exports = router;
