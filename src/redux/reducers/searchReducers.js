import searchConstants from "../constants/searchConstants";

const getSearchTracksReducer = (state = [], { type, payload }) => {
  switch (type) {
    case searchConstants.GET_SEARCHTRACK_SUCCESS:
      return payload;

    default:
      return state;
  }
};

export default getSearchTracksReducer;
