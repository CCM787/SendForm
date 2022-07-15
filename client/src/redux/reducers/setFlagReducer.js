import {initialState} from "../initState";
import { GET_FLAG } from "../types";

export const setFlagReducer = (state=initialState().setFlag ,action) => {
  switch (action.type) {
    case GET_FLAG:
      return action.payload;
    default:
      return state
  }

} 


