import React from "react";
import { useSelector } from "react-redux";
import useDate from "../../hooks/useDate";
import useTime from "../../hooks/useTime";
import "./Weather.css";
const CurrentWeather = () => {
  const weatherMainData = useSelector((state) => state.weatherDataReducer);
  const currentDay = useSelector((state) => state.currentDayReducer);

  const date = useDate(currentDay.dt);
  const clock = useTime(currentDay.dt);
  const sunrise = useTime(weatherMainData.city.sunrise)
  const sunset = useTime(weatherMainData.city.sunset)
  const weather = currentDay.weather[0];
  let image = weather.icon;

  return (
    <div className="current-weather">
      <div className="title-temp">
        <span className="city">{weatherMainData.city.name}</span>
        <div className="temp">
          <span className="main-temp">
            {Math.round(currentDay.main.temp)} °C
          </span>
          <span className="feels">
            Feels like: {Math.round(currentDay.main.feels_like)} °C
          </span>
        </div>
      </div>
      <span className="date">{date}</span>
      <span className="clock">{clock}</span>
      <div className="weather-info">
        <div className="info">
          <img src="./img/humidity.svg" alt="" className="icon" />
          <span>{currentDay.main.humidity}%</span>
        </div>
        <div className="info">
          <img src="./img/pressure.svg" alt="" className="icon" />
          <span>{currentDay.main.pressure} hPa</span>
        </div>
        <div className="info">
          <img src="./img/wind.svg" alt="" className="icon" />
          <span>{currentDay.wind.speed} m/sec</span>
        </div>
        <div className="info">
          <img src="./img/sunrise.svg" alt="" className="icon" />
          <span>{sunrise}</span>
        </div>
        <div className="info">
          <img src="./img/sunset.svg" alt="" className="icon" />
          <span>{sunset}</span>
        </div>
      </div>
      <div className="current-weather-img">
        <img src={`./img/${image}.png`} alt="" />
        <p className="weather-desc">{weather.description}</p>
      </div>
    </div>
  );
};

export default CurrentWeather;
