const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new mongoose.Schema({

    title:{
        type:String,
        required:true
    },
    authors:[
        {
            type:String,
            required:true
        }
    ],
    description:String,
    image:String,
    link:String,
    bookId:{
        type: String,
        required:true
    }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;