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
    API.getBooks(bookSearch)
      .then((res) => {
        console.log(res.data.items)
        setBooks(res.data.items);
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <Search
        handleSearchClick={handleSearchClick}
        handleInputChange={handleInputChange}
      />
      {books && <Results books={books} />}
    </>
  );
}

export default SearchContainer;
