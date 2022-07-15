import { GET_FLAG } from "../types";

export function setFlag (key) {

  return {
    type: GET_FLAG,
    payload: key,
  }
}

export function thunkSetFlag() {
  return (dispatch) => {
    dispatch(setFlag(true))
  }
}
