const db = require("../models");

module.exports = {
  getApiKey:(req,res)=>{
    res.json(process.env.GOOGLE_API_KEY);
  },

  getBooks: (req, res) => {
    db.Book.find({}).sort("title")
      .then((dbModels) => res.json(dbModels))
      .catch((err) => res.status(422).json(err));
  },
  addBook: (req, res) => {
    db.Book.findOne({ bookId: req.body.bookId }, (err, dbModel) => {
      dbModel
        ? res.json(false)
        : db.Book.create(req.body)
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    });
  },

  deleteBook: (req, res) => {
    db.Book.findByIdAndDelete(req.params.id)
      .then((dbModel) => res.json("Book Deleted"))
      .catch((err) => console.log(err));
  },
};
