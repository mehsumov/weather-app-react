import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as weatherActions from "../../redux/actions/weatherActions"
import useDate from '../../hooks/useDate';
import useTime from '../../hooks/useTime';

const Day = (props) => {
    const date = useDate(props.weather.dt)
    const time = useTime(props.weather.dt);
    const dispatch = useDispatch()
    let currentWeather = useSelector((state) => state.currentDayReducer);
  return (
    <div
      className="day-wrapper"
      onClick={() => dispatch(weatherActions.setCurrentDayData(props.weather))}
    >
      <div className={currentWeather.dt===props.weather.dt?"day active":"day"}>
        <img src={`./img/${props.icon}.png`} alt="" className="weather-img" />
        <span className="date">{date}</span>
        <span className="clock">{time}</span>
        <span className="temp">{Math.round(props.weather.main.temp)} °C</span>
      </div>
    </div>
  );
}

export default Day