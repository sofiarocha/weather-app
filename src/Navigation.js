import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navigation extends Component {
  render() {
    return (
      <div className="Navigation">
        <Link to="/lisbon">Lisbon</Link> | <Link to="/nairobi">Nairobi</Link> |{" "}
        <Link to="/kyoto">Kyoto</Link> | <Link to="/melbourne">Melbourne</Link>{" "}
        | <Link to="/la-paz">La Paz</Link>
      </div>
    );
  }
}

export default Navigation;
