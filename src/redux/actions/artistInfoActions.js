import artistInfoConstants from "../constants/artistInfoConstants";

const getArtistInfoRequest = () => ({
  type: artistInfoConstants.GET_ARTISTINFO_REQUEST,
});

const getArtistInfoSuccess = (info) => ({
  type: artistInfoConstants.GET_ARTISTINFO_SUCCESS,
  payload: info,
});

const getArtistInfoError = (error) => ({
  type: artistInfoConstants.GET_ARTISTINFO_ERROR,
  payload: error,
});

const artistInfoActions = {
  getArtistInfoRequest,
  getArtistInfoSuccess,
  getArtistInfoError,
};

export default artistInfoActions;
