import { combineReducers } from "redux";
import weatherDataReducer from "./weatherDataReducer";
import loaderReducer from "./loaderReducer";
import currentDayReducer from "./currentDayReducer";
import notFoundReducer from "./notFoundReducer";

const rootReducer = combineReducers({
  weatherDataReducer,
  loaderReducer,
  currentDayReducer,
  notFoundReducer,
});

export default rootReducer;
