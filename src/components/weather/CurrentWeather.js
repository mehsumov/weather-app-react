import React from 'react'
import "./Weather.css"
const CurrentWeather = () => {
  return (
    <div className="current-weather">
        <div className="title-temp">
          <span className="city">Baku</span>
          <div className="temp">
             <span className="main-temp">20 °C</span>
             <span className="feels">Feels like: 17 °C</span>
          </div>
         
        </div>
        <span className="date">25 May</span>
        <div className="weather-info">
          <div className="info">
            <img src="./img/humidity.svg" alt="" className="icon" />
            <span>25%</span>
          </div>
          <div className="info">
            <img src="./img/pressure.svg" alt="" className="icon" />
            <span>25 hPa</span>
          </div>
          <div className="info">
            <img src="./img/wind.svg" alt="" className="icon" />
            <span>10 m/sec</span>
          </div>
          <div className="info">
            <img src="./img/sunrise.svg" alt="" className="icon" />
            <span>06:00</span>
          </div>
          <div className="info">
            <img src="./img/sunset.svg" alt="" className="icon" />
            <span>19:00</span>
          </div>
        </div>
        <div className="current-weather-img">
            <img src="./img/01d.png" alt="" />
        </div>
      </div>
  )
}

export default CurrentWeather