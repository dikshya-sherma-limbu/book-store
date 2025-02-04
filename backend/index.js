require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8085;
const mongoose = require("mongoose");
const cors = require("cors");

console.log(process.env.PORT);
//middleware
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

//routes
const bookRoute = require("./src/routes/bookRoute");
const orderRoute = require("./src/routes/orderRoute");
const userRoute = require("./src/routes/userRoute");
const adminRoute = require("./src/routes/adminRoute");
app.use("/api/books", bookRoute);
app.use("/api/orders", orderRoute);
app.use("/api/users", userRoute);
app.use("/api/admin", adminRoute);

main()
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.DB_URL);
}
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
