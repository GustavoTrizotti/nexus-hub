import { combineReducers } from "redux";
import subjectReducer from "./subject/slice"

const rootReducer = combineReducers({ subjectReducer })

export default rootReducer;