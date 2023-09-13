import { combineReducers } from "redux";
import subjectReducer from "./subject/slice";
import sessionReducer from "./session/slice";
import deckReducer from "./deck/slice";
import drawerReducer from "./drawer/slice"

const rootReducer = combineReducers({
  subjectReducer,
  sessionReducer,
  deckReducer,
  drawerReducer,
});

export default rootReducer;
