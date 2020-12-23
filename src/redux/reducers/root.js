import { combineReducers } from "redux";
import artistInfoReducers from "./artistInfoReducers";
import topListReduces from "./topListReduces";

const root = combineReducers({
  topList: topListReduces,
  artistInfo: artistInfoReducers,
});

export default root;
