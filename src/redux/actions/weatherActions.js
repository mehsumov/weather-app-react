import * as actionTypes from "./actionTypes";

export function getWeatherDataSuccess(data) {
  return {
    type: actionTypes.GET_WEATHER_DATA_SUCCESS,
    payload: data,
  };
}

export function getWeatherData(lat, lon) {
  return function (dispatch) {
    let API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
     fetch(url)
       .then((response) => response.json())
       .then((data) => dispatch(getWeatherDataSuccess(data)));
  };
}
