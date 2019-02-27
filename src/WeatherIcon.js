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
    "01d": <Sunny />,
    "01n": <Sunny />,
    "02d": <Cloudy patchy />,
    "02n": <Cloudy patchy />,
    "03d": <Cloudy />,
    "03n": <Cloudy />,
    "04d": <Cloudy />,
    "04n": <Cloudy />,
    "09d": <Rain />,
    "09n": <Rain />,
    "10d": <Rain patchy />,
    "10n": <Rain patchy />,
    "11d": <Rain lighting />,
    "11n": <Rain lighting />,
    "13d": <Snow />,
    "13n": <Snow />,
    "50d": <Cloudy />,
    "50n": <Cloudy />
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
