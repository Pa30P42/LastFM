import searchConstants from "../constants/searchConstants";

const getSearchTracksReducer = (state = [], { type, payload }) => {
  switch (type) {
    case searchConstants.GET_SEARCHTRACK_SUCCESS:
      return payload;
    case searchConstants.DELETE_SEARCHLIST:
      return (state = []);

    default:
      return state;
  }
};

export default getSearchTracksReducer;
