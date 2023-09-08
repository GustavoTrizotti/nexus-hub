import { combineReducers } from "redux";
import subjectReducer from "./subject/slice";
import sessionReducer from "./session/slice";
import deckReducer from "./deck/slice";

const rootReducer = combineReducers({
  subjectReducer,
  sessionReducer,
  deckReducer,
});

export default rootReducer;
