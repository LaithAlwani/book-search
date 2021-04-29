import React from "react";
import { Link } from "react-router-dom";

function Results({ books, handleAddBook }) {
  return (
    <div>
      <h3>Results:</h3>
      {books.map((book) => (
        <div key={book.id} className="card mb-3">
          <div className="row no-gutters">
            <div className="col-md-2 ">
              <img
                className="center-block "
                src={book.volumeInfo.imageLinks.thumbnail}
                alt=""
              />
            </div>
            <div className="col-md-10">
              <div className="card-body">
                <h4 className="card-title">{book.volumeInfo.title}</h4>
                <p className="card-text">{book.searchInfo.textSnippet}</p>
                <p className="small">{book.volumeInfo.authors}</p>
                <Link
                  to={{ pathname: book.volumeInfo.canonicalVolumeLink }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="small btn btn-primary"
                >
                  preview
                </Link>
                <button
                  className="btn btn-warning ml-3"
                  onClick={() => handleAddBook(book)}
                >
                  + Mybooks
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Results;
