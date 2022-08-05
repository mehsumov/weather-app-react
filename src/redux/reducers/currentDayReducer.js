import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function currentDayReducer(
  state = initialState.currentDay,
  action
) {
  switch (action.type) {
    case actionTypes.SET_CURRENT_DAY_DATA:
      return action.payload;

    default:
      return state;
  }
}
