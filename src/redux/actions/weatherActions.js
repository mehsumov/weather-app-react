import * as actionTypes from "./actionTypes";
import { hideLoader, showLoader } from "./loaderActions";
import { setNotFound } from "./notFoundActions";

export function getWeatherDataSuccess(data) {
  return {
    type: actionTypes.GET_WEATHER_DATA_SUCCESS,
    payload: data,
  };
}

export function setCurrentDayData(data) {
  return {
    type: actionTypes.SET_CURRENT_DAY_DATA,
    payload: data,
  };
}

export function getWeatherData(lat, lon, city) {
  return function (dispatch) {
    dispatch(setNotFound(false))
    dispatch(showLoader());
    let API_KEY = "a008f18ba36a233145ac47a3ea495c5c";
    let url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
    if (city) {
      url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => {

        dispatch(getWeatherDataSuccess(data));

        dispatch(setCurrentDayData(data.list[0]));
      })
      .then(() => dispatch(hideLoader()))
      .catch(()=>{
        dispatch(hideLoader())
        dispatch(setNotFound(true))
      })
  };
}
