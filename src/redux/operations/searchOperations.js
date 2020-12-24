import axios from "axios";
import searchActions from "../actions/searchActions";

const getSearchTracks = (query) => async (dispatch) => {
  dispatch(searchActions.getSearchTracksRequest());

  try {
    // if (query === '') {

    // }

    const res = await axios.get(
      `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${query}&limit=20&api_key=d658c82874e65111992e0e51af4dbb6f&format=json`
    );

    dispatch(
      searchActions.getSearchTracksSuccess(res.data.results.trackmatches.track)
    );
  } catch (error) {
    dispatch(searchActions.getSearchTracksError);
  }
};

export default getSearchTracks;
