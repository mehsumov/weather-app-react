import { combineReducers } from "redux";
import weatherDataReducer from "./weatherDataReducer";
import loaderReducer from "./loaderReducer";
import currentDayReducer from "./currentDayReducer";
const rootReducer = combineReducers({
  weatherDataReducer,
  loaderReducer,
  currentDayReducer,
});

export default rootReducer;
