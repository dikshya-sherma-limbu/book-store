const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

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
app.use("/api/books", bookRoute);

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
