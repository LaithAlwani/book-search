import React from "react";

function Search({ handleSearchClick, handleInputChange }) {
  return (
    <div className="">
      <label htmlFor="book-title">Book title:</label>
      <input className="form-control" name="book-title" type="text"  onChange={handleInputChange}/>
      <div className="text-right">
        <button
          className="btn btn-success text-right mt-3"
          onClick={handleSearchClick}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Search;
