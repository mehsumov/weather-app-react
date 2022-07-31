import React from "react";
import Slider from "react-slick";
const WeatherOfDays = () => {
  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    arrows: false,
  };
  return (
    <Slider className="days" {...settings}>
      <div className="day-wrapper">
        <div className="day">
          <img src="./img/09d.png" alt="" className="weather-img" />
          <span className="date">25 May</span>
          <span className="temp">28 °C</span>
        </div>
      </div>
      <div className="day-wrapper">
        <div className="day">
          <img src="./img/09d.png" alt="" className="weather-img" />
          <span className="date">25 May</span>
          <span className="temp">28 °C</span>
        </div>
      </div>
      <div className="day-wrapper">
        <div className="day">
          <img src="./img/09d.png" alt="" className="weather-img" />
          <span className="date">25 May</span>
          <span className="temp">28 °C</span>
        </div>
      </div>
      <div className="day-wrapper">
        <div className="day">
          <img src="./img/09d.png" alt="" className="weather-img" />
          <span className="date">25 May</span>
          <span className="temp">28 °C</span>
        </div>
      </div>
      <div className="day-wrapper">
        <div className="day">
          <img src="./img/09d.png" alt="" className="weather-img" />
          <span className="date">25 May</span>
          <span className="temp">28 °C</span>
        </div>
      </div>
      <div className="day-wrapper">
        <div className="day">
          <img src="./img/09d.png" alt="" className="weather-img" />
          <span className="date">25 May</span>
          <span className="temp">28 °C</span>
        </div>
      </div>
      <div className="day-wrapper">
        <div className="day">
          <img src="./img/09d.png" alt="" className="weather-img" />
          <span className="date">25 May</span>
          <span className="temp">28 °C</span>
        </div>
      </div>
      <div className="day-wrapper">
        <div className="day">
          <img src="./img/09d.png" alt="" className="weather-img" />
          <span className="date">25 May</span>
          <span className="temp">28 °C</span>
        </div>
      </div>
      <div className="day-wrapper">
        <div className="day">
          <img src="./img/09d.png" alt="" className="weather-img" />
          <span className="date">25 May</span>
          <span className="temp">28 °C</span>
        </div>
      </div>
      <div className="day-wrapper">
        <div className="day">
          <img src="./img/09d.png" alt="" className="weather-img" />
          <span className="date">25 May</span>
          <span className="temp">28 °C</span>
        </div>
      </div>
      <div className="day-wrapper">
        <div className="day">
          <img src="./img/09d.png" alt="" className="weather-img" />
          <span className="date">25 May</span>
          <span className="temp">28 °C</span>
        </div>
      </div>
      <div className="day-wrapper">
        <div className="day">
          <img src="./img/09d.png" alt="" className="weather-img" />
          <span className="date">25 May</span>
          <span className="temp">28 °C</span>
        </div>
      </div>
    </Slider>
  );
};

export default WeatherOfDays;
