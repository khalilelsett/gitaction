import { combineReducers } from "redux";
import RootReducer1 from "./RootReducer1";
import RootReducer2 from "./RootReducer2";

const rootReducer = combineReducers({
  tasks: RootReducer1,
  Close:RootReducer2



});

export default rootReducer;
