import React from "react";
import {Link , useLocation} from "react-router-dom"

function Navbar() {
  const location = useLocation();
  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light mb-3">
      <Link className="navbar-brand" to="/">
        Google Books
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item ">
            <Link className={location.pathname === "/" ? "nav-link active" : "nav-link"} to="/">
              Search <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className={location.pathname === "/mybooks" ? "nav-link active" : "nav-link"} to="/mybooks">
              My Books
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
