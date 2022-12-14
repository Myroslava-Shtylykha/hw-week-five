import React from "react";


export default function WeatherForecastDay (props) {
    function day() {
let date = new Date(props.data.time * 1000);
let day = date.getDay();

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sut"];

return days[day];
    }

    return (
      <div>
        <div className="forecastDay">{day()}</div>
        <div className="forecastTemp">
          <span className="forecastTemp-max">
            {Math.round(props.data.temperature.maximum)}°
          </span>
          <span className="forecastTemp-min">
            {Math.round(props.data.temperature.minimum)}°
          </span>
        </div>
      </div>
    );
}