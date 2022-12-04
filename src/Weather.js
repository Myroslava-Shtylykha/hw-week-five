import React, {useState} from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";
import axios from "axios";
 
export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ready: false});
  const [city, setCity] = useState(props.defaultCity);
 
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      temperature: response.data.temperature.current,
      feels: response.data.temperature.feels_like,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      pressure: response.data.temperature.pressure,
      city: response.data.city,
      description: response.data.condition.description,
      iconUrl: response.data.condition.icon_url,
      time: new Date(response.data.time * 1000),
      degree: response.data.wind.degree
    });

  }

  function search() {
const apiKey = `cct8eebao110f93a5ba96c40f6fbbab8`;
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);
  }

function handleSubmit(event) {
  event.preventDefault();
  search();
}

function handleCityChange(event) {
setCity(event.target.value);
}

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                className="form-control"
                placeholder="Enter a city"
                autoFocus
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input type="submit" className="btn btn-info" value="Search" />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
        
      </div>
    );
  } else {
    search();
    return "Please, waight...";
  }
}

   