import { combineReducers } from "redux"
import { formDataReducer } from "./formDataReducer"
import { setFlagReducer } from "./setFlagReducer"

const rootReducer = combineReducers({
  formData: formDataReducer,
  setFlag: setFlagReducer,

})


export default rootReducer
