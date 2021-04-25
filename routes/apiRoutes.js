const router = require("express").Router();
const booksController = require("../controllers/booksController");


router.get("/books", booksController.getBooks);

router.post("/books", booksController.addBook);

module.exports = router;