import React from "react";
import { useSelector } from "react-redux/es/exports";
import Spinner from "../spinner/Spinner";
import CurrentWeather from "../weather/CurrentWeather";
import WeatherOfDays from "../weather/WeatherOfDays";
import "./Main.css"


const Main = () => {
  const loader = useSelector(state=>state.loaderReducer)
const renderMain = ()=>{
  return (
    <>
      <CurrentWeather />
      <WeatherOfDays />
    </>
  );
}

  return (
    <div className="weather-frame">
      {loader?<Spinner/>:renderMain()}

    </div>
  );
};

export default Main;
