import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import Day from "./Day";
const WeatherOfDays = () => {
  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll:3,
    arrows: false,
  };
    const weatherMainData = useSelector((state) => state.weatherDataReducer);
    console.log(weatherMainData);
  return (
    <Slider className="days" {...settings}>
      {weatherMainData.list.map((weather) => (
        <Day icon={weather.weather[0].icon} weather={weather} key={weather.dt} />
      ))}
    </Slider>
  );
};

export default WeatherOfDays;
