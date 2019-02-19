import React, { Component } from "react";
import Weather from "./Weather";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <p>
          My first app
          <span role="img" aria-label="">
            👩‍💻
          </span>
        </p>
        <Weather />
      </div>
    );
  }
}

export default App;
