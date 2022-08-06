import React from "react";
import { useSelector } from "react-redux/es/exports";
import NotFound from "../notFound/NotFound";
import Spinner from "../spinner/Spinner";
import CurrentWeather from "../weather/CurrentWeather";
import WeatherOfDays from "../weather/WeatherOfDays";
import "./Main.css"


const Main = () => {
  const loader = useSelector(state=>state.loaderReducer)
  const notFound = useSelector((state) => state.notFoundReducer);
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
      {loader?<Spinner/>:notFound?<NotFound/>:renderMain()}

    </div>
  );
};

export default Main;
