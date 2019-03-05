import React, { Component } from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import DateUtility from "./DateUtility";
import Api from "./Api";

class WeatherForecast extends Component {
  constructor(props) {
    super(props);

    this.state = {
      forecast: null,
      location: props.location
    };
  }

  componentDidMount = () => {
    this.refreshForecast();
  };

  componentWillReceiveProps = newProps => {
    this.setState(
      {
        location: newProps.location
      },
      () => {
        this.refreshForecast();
      }
    );
  };

  refreshForecast = () => {
    let url = `${Api.urlForecast}?appid=${Api.apiKey}&units=metric&${
      this.state.location
    }`;
    console.log(url);
    axios.get(url).then(response => {
      let forecast = response.data.list;
      let dailyForecast = [7, 15, 23, 31].map(forecastIndex => {
        let date = new Date(forecast[forecastIndex].dt * 1000);
        return {
          temperature: Math.round(forecast[forecastIndex].main.temp),
          icon: forecast[forecastIndex].weather[0].icon,
          date: new DateUtility(date).shortDays()
        };
      });
      this.setState({
        forecast: dailyForecast
      });
    });
  };

  render() {
    if (this.state.forecast) {
      let forecast = this.state.forecast;
      return (
        <div className="row">
          {forecast.map((weatherDetails, index) => {
            return (
              <div className="col-sm-3 text-center" key={index}>
                {weatherDetails.date} <br />{" "}
                <WeatherIcon code={weatherDetails.icon} size={0.4} /> <br />{" "}
                {weatherDetails.temperature}ºC
              </div>
            );
          })}
        </div>
      );
    } else {
      return null;
    }
  }
}

export default WeatherForecast;
