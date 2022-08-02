import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";


export default function loaderReducer(state=initialState.loader,action){
    switch (action.type) {
        case actionTypes.SHOW_LOADER:
            
            return action.payload;
        case actionTypes.HIDE_LOADER:
            return action.payload
    
        default:
            return state;
    }
}