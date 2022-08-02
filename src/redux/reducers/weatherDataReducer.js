import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function weatherDataReducer(
  state = initialState.weatherData,
  action
) {
  switch (action.type) {
    case actionTypes.GET_WEATHER_DATA_SUCCESS:
      return action.payload;

    default:
      return state;
  }
}
