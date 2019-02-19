import React, { Component } from "react";

class CurrentLocation extends Component {
  handleCurrentLocation = event => {
    navigator.geolocation.getCurrentPosition(position => {
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;
      this.props.onClick(`lat=${latitude}&lon=${longitude}`);
    });
  };

  render() {
    return (
      <div>
        <button
          className="btn btn-secondary btn-sm"
          onClick={this.handleCurrentLocation}
        >
          Current Location
        </button>
      </div>
    );
  }
}

export default CurrentLocation;
