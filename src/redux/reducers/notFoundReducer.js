import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function notFoundReducer(state=initialState.notFound,action){
    switch (action.type) {
        case actionTypes.SET_NOT_FOUND:
            
            return action.payload;
    
        default:
            return state;
    }
}