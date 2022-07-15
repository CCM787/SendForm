import { combineReducers } from "redux"
import { formDataReducer } from "./formDataReducer"
import { sendFormReducer } from "./sendFormReducer"

const rootReducer = combineReducers({
  formData: formDataReducer,
  sendForm: sendFormReducer,

})


export default rootReducer
