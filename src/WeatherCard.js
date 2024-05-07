import React from "react";

const WeatherCard = ({ data }) => {
  return (
    <div  className="weather-cards">
      <div className="weather-card">
        <p>Temperature: {data.temp_c}°C</p>
      </div>
      <div className="weather-card">
        {" "}
        <p>Humidity: {data.humidity}%</p>
      </div>

      <div className="weather-card">
        {" "}
        <p>Condition: {data.condition.text}</p>
      </div>
      <div className="weather-card">
        {" "}
        <p>Wind Speed: {data.wind_kph} km/h</p>
      </div>
    </div>
  );
};

export default WeatherCard;
