import React from "react";

const WeatherCard = ({ data }) => {
  return (
    <div className="weather-card">
      <div>
        <p>Temperature: {data.temp_c}°C</p>
      </div>
      <div>
        {" "}
        <p>Humidity: {data.humidity}%</p>
      </div>

      <div>
        {" "}
        <p>Condition: {data.condition.text}</p>
      </div>
      <div>
        {" "}
        <p>Wind Speed: {data.wind_kph} km/h</p>
      </div>
    </div>
  );
};

export default WeatherCard;
