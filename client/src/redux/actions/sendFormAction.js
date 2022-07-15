import { GET_FORM } from "../types";

export function setSendForm (key) {

  return {
    type: GET_FORM,
    payload: key,
  }
}

export const thunkSendForm = () => {
  return (dispatch) => {
    dispatch(setSendForm(true))
  }
}
