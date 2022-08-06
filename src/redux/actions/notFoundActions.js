import * as actionTypes from "./actionTypes";


export function setNotFound(value){
    return {
        type:actionTypes.SET_NOT_FOUND,
        payload:value
    }
}