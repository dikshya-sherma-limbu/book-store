const Order = require("../models/orderModel");
const createOrder = async (req, res) => {
  try {
    const newOrder = await Order(req.body);
    const saveOrder = await newOrder.save();
    res.status(200).json(saveOrder);
  } catch (err) {
    res.status(500).send({ message: "Failed to create order" });
  }
};

const getOrdersByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const orders = await Order.find({ email }).sort({ createdAt: -1 });
    if (!orders) {
      res.status(404).send({ message: "No orders found" });
    }
    {
      return res.status(200).send(orders);
    }
  } catch (err) {
    res.status(500).send({ message: "Failed to get orders by email" });
  }
};

module.exports = { createOrder, getOrdersByEmail };
