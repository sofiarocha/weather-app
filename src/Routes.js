import React, { Component } from "react";
import { Route } from "react-router-dom";
import Weather from "./Weather";

class Routes extends Component {
  render() {
    return (
      <div>
        <Route
          path="/lisbon"
          exact={true}
          render={() => <Weather city="Lisbon" />}
        />
        <Route
          path="/nairobi"
          exact={true}
          render={() => <Weather city="Nairobi" />}
        />
        <Route
          path="/kyoto"
          exact={true}
          render={() => <Weather city="Kyoto" />}
        />
        <Route
          path="/melbourne"
          exact={true}
          render={() => <Weather city="Melbourne" />}
        />
        <Route
          path="/la-paz"
          exact={true}
          render={() => <Weather city="La Paz" />}
        />
        <Route path="/" exact={true} render={() => <Weather />} />
      </div>
    );
  }
}

export default Routes;
