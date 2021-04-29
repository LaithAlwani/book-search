import React from "react";

function Search({ handleSearchClick, handleInputChange }) {
  return (
    <form onSubmit={handleSearchClick}>
      <label htmlFor="book-title">Book title:</label>
      <input
        className="form-control"
        name="book-title"
        type="text"
        onChange={handleInputChange}
        required
      />
      <div className="text-right">
        <button type="submit" className="btn btn-success text-right mt-3">
          Search
        </button>
      </div>
    </form>
  );
}

export default Search;
