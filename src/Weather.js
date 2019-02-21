import React, { Component } from "react";
import SearchForm from "./SearchForm";
import CurrentLocation from "./CurrentLocation";
import DateUtility from "./DateUtility";
import ApiUtility from "./ApiUtility";
import WeatherIcon from "./WeatherIcon";

class Weather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: this.props.city
    };
  }

  componentDidMount = () => {
    if (this.state.city) {
      this.refreshResults(`q=${this.state.city}`);
    }
  };

  refreshResults = location => {
    let url = `${ApiUtility.rootUrl}?appid=${
      ApiUtility.apiKey
    }&units=metric&${location}`;
    const axios = require("axios");
    axios.get(url).then(response => {
      let date = new Date(response.data.dt * 1000);
      this.setState({
        city: response.data.name,
        weather: {
          date: new DateUtility(date).formatedDate(),
          icon: response.data.weather[0].icon,
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
            <WeatherIcon
              code={this.state.weather.icon}
              description={this.state.weather.description}
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
