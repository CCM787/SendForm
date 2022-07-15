import { SET_DATA} from "../types";
import axios from 'axios'

export function setSendData(key) {

  return {
    type: SET_DATA,
    payload: key,
  }
}

export const thunkSendData = ({name, telephone, email}) => {
  return (dispatch) => {
    console.log('ya tut');
    dispatch(setSendData())
    axios.post('https://jsonplaceholder.typicode.com/posts/', {
      name,
      telephone,
      email,
    })
    .then(res => {
      dispatch(setSendData(res.data))
    })
  }
}
