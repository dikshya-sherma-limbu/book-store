const express = require("express");

const router = express.Router();

const {
  createOrder,
  getOrdersByEmail,
} = require("../controllers/orderController");
// ORDER ENDPOINTS

// create an order
router.post("/create-order", createOrder);

// get orders by user email
router.get("/email/:email", getOrdersByEmail);
module.exports = router;
