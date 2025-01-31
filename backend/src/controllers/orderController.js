const createOrder = async (req, res) => {
  try {
    const newOrder = await Order(req.body);
    const saveOrder = await newOrder.save();
    res.status(200).json(saveOrder);
  } catch (err) {
    console.log("Error creating order : ", err);
    res.status(500).send({ message: "Failed to create order" });
  }
};

module.exports = { createOrder };
