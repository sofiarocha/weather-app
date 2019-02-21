import React, { Component } from "react";

class WeatherIcon extends Component {
  render() {
    console.log(this.props.iconCode);
    return (
      <div>
        <img
          src={`http://openweathermap.org/img/w/${this.props.code}.png`}
          alt={this.props.description}
        />
      </div>
    );
  }
}

export default WeatherIcon;
