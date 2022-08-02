import * as actionTypes from "./actionTypes";

export function showLoader(){
    return {
        type:actionTypes.SHOW_LOADER,
        payload:true
    }
}
export function hideLoader(){
    return {
        type:actionTypes.HIDE_LOADER,
        payload:false
    }
}