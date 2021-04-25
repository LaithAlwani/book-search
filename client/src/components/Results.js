import React from "react";
import {Link} from "react-router-dom"

function Results({ books }) {
  return (
    <div>
      <h3>Results:</h3>
      {books.map((book, index) => (
        <div key={index} className="card mb-3">
          <div className="row no-gutters">
            <div className="col-md-2">
              <img src={book.volumeInfo.imageLinks.thumbnail} alt="" />
            </div>
            <div className="col-md-10">
              <div className="card-body">
                <h4 className="card-title">{book.volumeInfo.title}</h4>
                <p className="card-text">{book.volumeInfo.authors}</p>
                <a href={book.volumeInfo.canonicalVolumeLink} target="_blank" className="small">preview</a>
                <button className="btn btn-warning ml-3">+ Mybooks</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Results;
