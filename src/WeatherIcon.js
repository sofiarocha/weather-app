import React, { Component } from "react";
import {
  WeatherThemeProvider,
  Sunny,
  Rain,
  Snow,
  Cloudy
} from "weather-styled-icon";

class WeatherIcon extends Component {
  iconMatching = {
    "01d": <Sunny size={this.props.size} />,
    "01n": <Sunny size={this.props.size} />,
    "02d": <Cloudy patchy size={this.props.size} />,
    "02n": <Cloudy patchy size={this.props.size} />,
    "03d": <Cloudy size={this.props.size} />,
    "03n": <Cloudy size={this.props.size} />,
    "04d": <Cloudy size={this.props.size} />,
    "04n": <Cloudy size={this.props.size} />,
    "09d": <Rain size={this.props.size} />,
    "09n": <Rain size={this.props.size} />,
    "10d": <Rain patchy size={this.props.size} />,
    "10n": <Rain patchy size={this.props.size} />,
    "11d": <Rain lighting size={this.props.size} />,
    "11n": <Rain lighting size={this.props.size} />,
    "13d": <Snow size={this.props.size} />,
    "13n": <Snow size={this.props.size} />,
    "50d": <Cloudy size={this.props.size} />,
    "50n": <Cloudy size={this.props.size} />
  };

  theme = {
    cloudsColor: "#212121",
    dropsColor: "#212121",
    boltColor: "#212121",
    backgroundColor: "#F5F5F5",
    sunColor: "#212121",
    raysColor: "#212121"
  };

  render() {
    let icon = this.iconMatching[this.props.code];

    return (
      <WeatherThemeProvider theme={this.theme}>{icon}</WeatherThemeProvider>
    );
  }
}

export default WeatherIcon;
