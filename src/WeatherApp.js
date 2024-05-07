import React, { useState } from "react";
import axios from "axios";
import WeatherCard from "./WeatherCard";

const WeatherApp = () => {
  const key = "66f337122ddf4024a4b101441242201&q";
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=${key}=${city}&days=1&aqi=no&alerts=no`
      );
      setWeatherData(response.data);
    } catch (error) {
      alert("Failed to fetch weather data");
    }
    setLoading(false);
  };

  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <button onClick={handleSearch}>Search</button>
      {loading && <p>Loading data...</p>}
      {weatherData && (
        <div className="weather-cards">
          <WeatherCard data={weatherData.current} />
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
