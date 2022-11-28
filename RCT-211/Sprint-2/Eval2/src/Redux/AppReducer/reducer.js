
import * as types from "./actionType"



// NOTE: DO NOT MODIFY the intial state structure in this file.
const initialState = {
  shoes: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {

  const { type, payload } = action;
  switch(type){

    case types.GET_SHOES_DATA_REQUEST:
      return {
        ...state, isLoading: true
      }
    case types.GET_SHOES_DATA_SUCCESS:
      return {
        ...state, isLoading: false, shoes: payload,
        isError: false
      }
    case types.GET_SHOES_DATA_FAILURE:
      return {
        ...state,
        isLoading:false,
        isError: true,
        shoes: []
      }

    default:
      return state;
  }
  return state;
};

export { reducer };
