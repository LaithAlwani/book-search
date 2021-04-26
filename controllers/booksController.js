const db = require("../models");

module.exports = {
  getApiKey:(req,res)=>{
    res.json(process.env.GOOGLE_API_KEY);
  },

  getBooks: (req, res) => {
    db.Book.find()
      .then((dbModels) => res.json(dbModels))
      .catch((err) => res.status(422).json(err));
  },
  addBook: (req, res) => {
    db.Book.findOne({ bookId: req.body.bookId }, (err, dbModel) => {
      dbModel
        ? res.json("book already exsists")
        : db.Book.create(req.body)
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    });
  },

  deleteBook: (req, res) => {
    db.Book.findOneAndDelete(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => console.log(err));
  },
};
