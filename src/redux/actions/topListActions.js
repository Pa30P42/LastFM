import topListConstants from "../constants/topListConstants";

const getTopListRequest = () => ({
  type: topListConstants.GET_TOPLIST_REQUEST,
});

const getTopListSuccess = (list) => ({
  type: topListConstants.GET_TOPLIST_SUCCESS,
  payload: list,
});

const getTopListError = (error) => ({
  type: topListConstants.GET_TOPLIST_ERROR,
  payload: error,
});

export default {
  getTopListRequest,
  getTopListSuccess,
  getTopListError,
};
