import React from "react";
import CurrentWeather from "../weather/CurrentWeather";
import WeatherOfDays from "../weather/WeatherOfDays";
import "./Main.css"

const Main = () => {
  return (
    <div className="weather-frame">
      <CurrentWeather/>
    <WeatherOfDays/>
    </div>
  );
};

export default Main;
