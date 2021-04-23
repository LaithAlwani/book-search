import React from "react";
import Results from "./Results";
import Search from "./Search";
function SearchContainer() {
  return (
    <div className="container-fluid">
      <div className="jumbotron text-center">
        <h1>(React) Google Books Search</h1>
        <p className="lead"> Search for and Save Books of Intrest!</p>
      </div>
      <Search />
      <Results />
    </div>
  );
}

export default SearchContainer;
