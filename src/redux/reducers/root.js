import { combineReducers } from "redux";
import topListReduces from "./topListReduces";

const root = combineReducers({
  topList: topListReduces,
});

export default root;
