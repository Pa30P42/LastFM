import axios from "axios";
import topListActions from "../actions/topListActions";

const getTopList = (page) => async (dispatch) => {
  dispatch(topListActions.getTopListRequest());

  try {
    const res = await axios.get(
      `http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=d658c82874e65111992e0e51af4dbb6f&page=${page}&limit=20&format=json`
    );

    dispatch(topListActions.getTopListSuccess(res.data.tracks.track));
  } catch (error) {
    console.log("error", error);
    dispatch(topListActions.getTopListError(error));
  }
};

export default getTopList;
