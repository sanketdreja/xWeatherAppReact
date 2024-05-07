import React from "react";

const WeatherCard = ({ data }) => {
  return (
    <div className="weather-card">
      <p>Temperature: {data.temp_c}°C</p>
      <p>Humidity: {data.humidity}%</p>
      <p>Condition: {data.condition.text}</p>
      <p>Wind Speed: {data.wind_kph} km/h</p>
    </div>
  );
};

export default WeatherCard;
