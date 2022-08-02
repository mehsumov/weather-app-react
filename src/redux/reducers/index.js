import { combineReducers } from "redux";
import weatherDataReducer from "./weatherDataReducer";
import loaderReducer from "./loaderReducer";
const rootReducer = combineReducers({
  weatherDataReducer,
  loaderReducer,
});

export default rootReducer;
