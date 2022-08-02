import * as actionTypes from "./actionTypes";
import { hideLoader, showLoader } from "./loaderActions";


export function getWeatherDataSuccess(data) {
  return {
    type: actionTypes.GET_WEATHER_DATA_SUCCESS,
    payload: data,
  };
}

export function getWeatherData(lat, lon) {
  return function (dispatch) {
    dispatch(showLoader())
    let API_KEY = 'a008f18ba36a233145ac47a3ea495c5c';
    let url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
     fetch(url)
       .then((response) => response.json())
       .then((data) => dispatch(getWeatherDataSuccess(data),hideLoader()))
       .then(()=>dispatch(hideLoader()))
  };
}
