import React, { Component } from "react";
import Navigation from "./Navigation";
import Routes from "./Routes";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <p>
          <span role="img" aria-label="">
            🌍🌎🌏
          </span>
          Around the World Weather:
        </p>
        <Navigation />
        <Routes />
      </div>
    );
  }
}

export default App;
