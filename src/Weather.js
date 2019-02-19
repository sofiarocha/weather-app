import React, { Component } from "react";
import SearchForm from "./SearchForm";
import CurrentLocation from "./CurrentLocation";

class Weather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: ""
    };
  }

  formatDate = date => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thrusday",
      "Friday",
      "Sunday"
    ];

    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }

    return `${days[date.getDay()]}, ${hours}:${minutes}`;
  };

  refreshResults = location => {
    const apiKey = "9d92245d08bdc72ed4ac970627d76d46";
    const rootUrl = "https://api.openweathermap.org/data/2.5/weather";
    let url = `${rootUrl}?appid=${apiKey}&units=metric&${location}`;
    const axios = require("axios");
    console.log(url);
    axios.get(url).then(response => {
      this.setState({
        city: response.data.name,
        weather: {
          date: this.formatDate(new Date(response.data.dt * 1000)),
          icon: `http://openweathermap.org/img/w/${
            response.data.weather[0].icon
          }.png`,
          temperature: Math.round(response.data.main.temp),
          description: response.data.weather[0].description,
          wind: Math.round(response.data.wind.speed),
          humidity: response.data.main.humidity,
          clouds: Math.round(response.data.clouds.all)
        }
      });
    });
  };

  showResults = () => {
    return (
      <div>
        <div>
          <h2>{this.state.city}</h2>
          <h3>{this.state.weather.date}</h3>
        </div>
        <div className="row">
          <div className="col-sm-2 align-self-center pr-5">
            <img
              src={this.state.weather.icon}
              alt={this.state.weather.description}
            />
          </div>
          <div className="col-sm-5 align-self-center">
            <p>{this.state.weather.temperature}ºC</p>
            <br />
            <p>{this.state.weather.description}</p>
          </div>
          <div className="col-sm">
            <p>Wind: {this.state.weather.wind} km/h</p>
            <p>Humidity: {this.state.weather.humidity} %</p>
            <p>Clouds: {this.state.weather.clouds} %</p>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col-sm-8 pr-0">
            <SearchForm onRefresh={this.refreshResults} />
          </div>
          <div className="col-sm-4 align-self-end">
            <CurrentLocation onClick={this.refreshResults} />
          </div>
        </div>
        {this.state.weather ? this.showResults() : null}
      </div>
    );
  }
}

export default Weather;
