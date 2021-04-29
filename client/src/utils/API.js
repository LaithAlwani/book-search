import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  
  searchBooks: function(query) {
    return axios.get("/api").then(res =>{
      return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}+intitle&printType=books&key=${res.data}`).catch(err => res.json(err))
    });
  },
  getBooks: ()=>{
    return axios.get("/api/books");
  },
  deleteBook: id => {
    return axios.delete("/api/books/" + id);
  },
  addBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};