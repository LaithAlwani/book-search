import React, { useEffect, useState } from "react";
import API from "../utils/API";

function MyBooks() {
  const [myBooks, setMyBooks] = useState([]);

  useEffect(() => {
    loadBooks();
  }, []);

  function loadBooks() {
    API.getBooks()
      .then((res) => setMyBooks(res.data))
      .catch((err) => console.log(err));
  }

  function handleDeleteBtn(id){
    console.log(id);
      API.deleteBook(id)
      .then(res=> loadBooks())
      .catch(err=>console.log(err));
  }
  return (
    <div>
        <h3>MyBooks</h3>
      {myBooks.map((book) => (
        <div key={book._id} className="card mb-3">
          <div className="row no-gutters">
            <div className="col-md-2">
              <img src={book.image} alt="" />
            </div>
            <div className="col-md-10">
              <div className="card-body">
                <h4 className="card-title">{book.title}</h4>
                <p className="card-text">{book.description}</p>
                <p className="small">{book.authors}</p>
                <a
                  href={book.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="small btn btn-primary"
                >
                  preview
                </a>
                <button className="btn btn-danger ml-2" onClick={()=>handleDeleteBtn(book._id)}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MyBooks;
