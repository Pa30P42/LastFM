import searchConstants from "../constants/searchConstants";

const getSearchTracksRequest = () => ({
  type: searchConstants.GET_SEARCHTRACK_REQUEST,
});

const getSearchTracksSuccess = (list) => ({
  type: searchConstants.GET_SEARCHTRACK_SUCCESS,
  payload: list,
});

const getSearchTracksError = (error) => ({
  type: searchConstants.GET_SEARCHTRACK_ERROR,
  payload: error,
});

const searchActions = {
  getSearchTracksRequest,
  getSearchTracksSuccess,
  getSearchTracksError,
};

export default searchActions;
