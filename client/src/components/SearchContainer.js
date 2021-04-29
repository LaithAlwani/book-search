import React, { useState, useEffect } from "react";
import Results from "./Results";
import Search from "./Search";
import API from "../utils/API";
import Message from "../components/Message"

function SearchContainer() {
  const [bookSearch, setBookSearch] = useState("");
  const [books, setBooks] = useState([]);
  const [message, setMessage] = useState("");
  

  useEffect(() => {
  }, [handleSearchClick, setMessage]);

  function handleInputChange(event) {
    const { value } = event.target;
    setBookSearch(value);
  }

  function handleSearchClick(event) {
    event.preventDefault();
    API.searchBooks(bookSearch)
      .then(res => setBooks(res.data.items))
      .catch(err => console.log(err));
  }

  function handleAddBook(book) {
    API.addBook({
      title: book.volumeInfo.title,
      description: book.searchInfo.textSnippet,
      image: book.volumeInfo.imageLinks.thumbnail,
      authors: book.volumeInfo.authors,
      link: book.volumeInfo.canonicalVolumeLink,
      bookId: book.id,
    })
      .then((res) => {
        if (res.data === false) {
          setMessage("Book Already exsists in list");
          setTimeout(()=>{
            setMessage("");
          },3000)
        } else {
          setMessage("Book addded succesfully");
          setTimeout(()=>{
            setMessage("");
          },2000);
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      {message && <Message message={message} />}
      <Search
        handleSearchClick={handleSearchClick}
        handleInputChange={handleInputChange}
      />
      {books
        ? <Results books={books} handleAddBook={handleAddBook} />
        : <Message message="no book found" />
      }
    </>
  );
}

export default SearchContainer;
