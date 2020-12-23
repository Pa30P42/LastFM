import { combineReducers } from "redux";
import artistInfoReducers from "./artistInfoReducers";
import getSearchTracksReducer from "./searchReducers";
import topListReduces from "./topListReduces";

const root = combineReducers({
  topList: topListReduces,
  artistInfo: artistInfoReducers,
  searchTracks: getSearchTracksReducer,
});

export default root;
