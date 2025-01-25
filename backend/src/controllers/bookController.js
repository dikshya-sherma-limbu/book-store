const { model } = require("mongoose");
const Book = require("../models/bookModel");

const postBook = async (req, res) => {
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
};

const getAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find().sort({ createdAt: -1 }); // sort by createdAt in descending order - latest first
    res.status(200).send({ message: "All books fetched", books: allBooks });
  } catch (err) {
    console.log("Error fetching all books : ", err);
    res.status(500).send({ message: "Failed to get books" });
  }
};

const getSingleBook = async (req, res) => {
  try {
    const { id } = req.params;
    const singleBook = await Book.findById(id);
    if (!singleBook) {
      console.log(singleBook);
      return res.status(404).send({ message: "Book not found" });
    }
    res.status(200).send({ message: "Single book fetched", book: singleBook });
  } catch (err) {
    console.log("Error fetching single book : ", err);
    res.status(500).send({ message: "Failed to get book" });
  }
};

const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBook = await Book.findByIdAndUpdate(id, req.body, {
      new: true,
    }); // new: true returns the updated document
    if (!updatedBook) {
      return res.status(404).send({ message: "Book not found" });
    }
    res.status(200).send({ message: "Book updated", book: updatedBook });
  } catch (err) {
    console.log("Error updating book : ", err);
    res.status(500).send({ message: "Failed to update book" });
  }
};

const deleteBook = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) {
      return res.status(404).send({ message: "Book not found" });
    }
    res.status(200).send({ message: "Book deleted" });
  } catch (err) {
    console.log("Error deleting book : ", err);
    res.status(500).send({ message: "Failed to delete book" });
  }
};

module.exports = {
  postBook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook,
};
