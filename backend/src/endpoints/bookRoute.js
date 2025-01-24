const express = require("express");
const router = express.Router();
const Book = require("../books/bookModel");
//API ENDPOINT FOR BOOKS

// post a book
router.post("/create-book", async (req, res) => {
  try {
    const newBook = await Book({ ...req.body });
    await newBook.save();
    res
      .status(200)
      .send({ message: "Book created successfully", book: newBook });
  } catch (err) {
    console.log("Error on Book POST : ", err);
    res.status(500).send({ message: "Book creation failed" });
  }
});

module.exports = router;
