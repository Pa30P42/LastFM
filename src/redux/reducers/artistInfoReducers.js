import artistInfoConstants from "../constants/artistInfoConstants";

const artistInfoReducers = (state = {}, { type, payload }) => {
  switch (type) {
    case artistInfoConstants.GET_ARTISTINFO_SUCCESS:
      return payload;

    default:
      return state;
  }
};

export default artistInfoReducers;
