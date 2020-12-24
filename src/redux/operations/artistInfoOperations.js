import axios from "axios";
import artistInfoActions from "../actions/artistInfoActions";

const getArtistInfo = (id) => async (dispatch) => {
  dispatch(artistInfoActions.getArtistInfoRequest());

  try {
    const res = await axios.get(
      `https://ws.audioscrobbler.com//2.0/?method=artist.getinfo&mbid=${id}&api_key=d658c82874e65111992e0e51af4dbb6f&format=json`
    );

    dispatch(artistInfoActions.getArtistInfoSuccess(res.data.artist));
  } catch (error) {
    dispatch(artistInfoActions.getArtistInfoError(error));
  }
};

export default getArtistInfo;
