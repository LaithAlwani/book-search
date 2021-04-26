import React, { useState, useEffect } from "react";
import Results from "./Results";
import Search from "./Search";
import API from "../utils/API";

function SearchContainer() {
  const [bookSearch, setBookSearch] = useState("");
  const [books, setBooks] = useState([]);

  useEffect(() => {}, [handleSearchClick]);

  function handleInputChange(event) {
    const { value } = event.target;
    setBookSearch(value);
  }

  function handleSearchClick(event) {
    event.preventDefault();
    API.searchBooks(bookSearch)
      .then(res => {
        setBooks(res.data.items);
      })
      .catch((err) => console.log(err));
  }

  function handleAddBook(book){
    API.saveBook({
      title:book.volumeInfo.title,
      description:book.searchInfo.textSnippet,
      image:book.volumeInfo.imageLinks.thumbnail,
      authors:book.volumeInfo.authors,
      link:book.volumeInfo.canonicalVolumeLink,
      bookId:book.id
    })
    .then()
    .catch(err=>console.log(err));
  }

  return (
    <>
      <Search
        handleSearchClick={handleSearchClick}
        handleInputChange={handleInputChange}
      />
      {books && <Results books={books} handleAddBook={handleAddBook} />}
    </>
  );
}

export default SearchContainer;
