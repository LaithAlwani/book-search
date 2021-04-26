import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  searchBooks: function(query) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}+intitle&printType=books&key=${process.env.REACT_APP_GOOGLE_API_KEY}`);
  },
  getBooks: ()=>{
    return axios.get("/api/books");
  },
  deleteBook: id => {
    console.log("delete book api")
    return axios.delete("/api/books/" + id);
  },
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};