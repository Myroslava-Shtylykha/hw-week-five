import React, {useState} from "react";
import CurrentDate from "./CurrentDate";
import "./Weather.css";
import axios from "axios";
 
export default function Weather(props) {
  
  let [weatherData, setWeatherData] = useState({ready: false});
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      feels: response.data.temperature.feels_like,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      pressure: response.data.temperature.pressure,
      city: response.data.city,
      description: response.data.condition.description,
      iconUrl: response.data.condition.icon_url,
      time: new Date(response.data.time * 1000)
    });

  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                className="form-control"
                placeholder="Enter a city"
                autoFocus
              />
            </div>
            <div className="col-3">
              <input type="submit" className="btn btn-info" value="Search" />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <div className="day_time">
          <CurrentDate date={weatherData.time} />
        </div>
        <img src={weatherData.iconUrl} alt={weatherData.description}></img>
        <ul>
          <li className="temperature">
            {Math.round(weatherData.temperature)}℃
          </li>
          <li className="text-capitalize">{weatherData.description}</li>
          <li className="feels">
            Feels like {Math.round(weatherData.feels)} ℃
          </li>
        </ul>
        <hr />
        <div className="footer">
          <div className="row">
            <div className="col-6">
              <ul>
                <li>Wind {weatherData.wind} m/s</li>
                <li>Humidity {weatherData.humidity} %</li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>Precipitation 85 %</li>
                <li>Pressure {weatherData.pressure} Pa</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = `cct8eebao110f93a5ba96c40f6fbbab8`;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Please, waight...";
  }
}

   