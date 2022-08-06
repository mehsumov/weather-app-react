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
    slidesToScroll: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
    const weatherMainData = useSelector((state) => state.weatherDataReducer);

  return (
    <Slider className="days" {...settings}>
      {weatherMainData.list.map((weather) => (
        <Day icon={weather.weather[0].icon} weather={weather} key={weather.dt} />
      ))}
    </Slider>
  );
};

export default WeatherOfDays;
