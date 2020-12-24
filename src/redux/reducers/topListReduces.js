import topListConstants from "../constants/topListConstants";

const topListReduces = (state = [], { type, payload }) => {
  switch (type) {
    case topListConstants.GET_TOPLIST_SUCCESS:
      return [...state, ...payload];
    // return [...state, ...payload];

    default:
      return state;
  }
};

export default topListReduces;
