import React from "react";
import CurrentDate from "./CurrentDate";

export default function WeatherInfo(props) {
return (
  <div className="WeatherInfo">
    <h1> {props.data.city} </h1>
    <div className="day_time">
      <CurrentDate date={props.data.time} />
    </div>
    <img src={props.data.iconUrl} alt={props.data.description}></img>
    <ul>
      <li className="temperature">{Math.round(props.data.temperature)}℃</li>
      <li className="text-capitalize">{props.data.description}</li>
      <li className="feels">Feels like {Math.round(props.data.feels)} ℃</li>
    </ul>
    <hr />
    <div className="footer">
      <div className="row">
        <div className="col-6">
          <ul>
            <li>Wind {props.data.wind} m/s</li>
            <li>Humidity {props.data.humidity} %</li>
          </ul>
        </div>
        <div className="col-6">
          <ul>
            <li>Wind degree {props.data.degree} °</li>
            <li>Pressure {props.data.pressure} Pa</li>
          </ul>
        </div>
      </div>
    </div>
    <hr />
  </div>
);
}