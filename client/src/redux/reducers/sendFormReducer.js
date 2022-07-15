import {initialState} from "../initState";
import { GET_FORM } from "../types";

export const sendFormReducer = (state=initialState().sendForm ,action) => {
  switch (action.type) {
    case GET_FORM:
      return action.payload;
    default:
      return state
  }

} 


