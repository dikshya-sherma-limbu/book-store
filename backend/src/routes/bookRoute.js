const express = require("express");
const router = express.Router();
const {
  postBook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook,
} = require("../controllers/bookController");
const verifyAdminToken = require("../middleware/verifyAdminToken");

// Work flow from frontend to backend
//frontend req -> route -> controller -> model -> database

//API ENDPOINT FOR BOOKS

// post a book
router.post("/create-book", verifyAdminToken, postBook);

// get all books
router.get("/", getAllBooks);

// get single book
router.get("/:id", getSingleBook);

//update a book
router.put("/update-book/:id", verifyAdminToken, updateBook);

//delete a book
router.delete("/delete-book/:id", verifyAdminToken, deleteBook);

module.exports = router;
