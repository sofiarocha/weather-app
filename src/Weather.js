import React, { Component } from "react";
import SearchForm from "./SearchForm";
import CurrentLocation from "./CurrentLocation";
import axios from "axios";
import DateUtility from "./DateUtility";
import Api from "./Api";
import WeatherIcon from "./WeatherIcon";
import WeatherForecast from "./WeatherForecast";

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
    let url = `${Api.rootUrl}?appid=${Api.apiKey}&units=metric&${location}`;
    axios
      .get(url)
      .then(response => {
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
            clouds: Math.round(response.data.clouds.all),
            location
          }
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  showResults = () => {
    console.log(this.state.weather.location);
    return (
      <div>
        <div>
          <h2>{this.state.city}</h2>
          <h3>{this.state.weather.date}</h3>
        </div>
        <div className="row">
          <WeatherIcon code={this.state.weather.icon} size={0.8} />
          <div className="col-sm-4 align-self-center">
            <p className="degrees">{this.state.weather.temperature}ºC</p>
            <br />
            <p>{this.state.weather.description}</p>
          </div>
          <div className="col-sm align-self-center">
            <p>Wind: {this.state.weather.wind} km/h</p>
            <p>Humidity: {this.state.weather.humidity} %</p>
            <p>Clouds: {this.state.weather.clouds} %</p>
          </div>
        </div>
        <WeatherForecast location={this.state.weather.location} />
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
