import {initialState} from "../initState";
import { SET_DATA } from "../types";

export const formDataReducer = (state=initialState().formData ,action) => {
  switch (action.type) {
    case  SET_DATA:
      return action.payload;
    default:
      return state
  }

} 
