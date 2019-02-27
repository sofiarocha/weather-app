import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import Routes from "./Routes";
import "./App.sass";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>
          Around the World Weather{" "}
          <Link to="/" className="badge badge-warning">
            home
          </Link>
        </h1>
        <Navigation />
        <Routes />
      </div>
    );
  }
}

export default App;
