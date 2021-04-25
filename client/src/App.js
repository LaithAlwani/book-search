import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SearchContainer from "./components/SearchContainer";
import MyBooks from "./components/MyBooks"
import Jumbotron from "./components/Jumbotron";

console.log(process.env.REACT_APP_GOOGLE_API_KEY);

function App() {

  return (
    <Router>
      <Navbar />
      <div className="container-fluid">
        <Jumbotron />
        <Route exact path={"/"} component={SearchContainer} />
        <Route  path={"/mybooks"} component={MyBooks} />
      </div>
    </Router>
  );
}

export default App;
