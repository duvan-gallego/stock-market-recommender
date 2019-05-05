import {
  GET_RECOMMENDATIONS,
  GET_RECOMMENDATIONS_SUCCESS,
  GET_RECOMMENDATIONS_ERROR,
  RESET_RECOMMENDATIONS,
} from './constants';

const initialState = {
  stockSymbol: null,
  stockPrice: null,
  socialNetwork: null,
  startDate: null,
  endDate: null,
  countOfSocialMediaPost: null,
  dateOfUpdate: null,
  recommendation: null,
  socialMediaMessages: [],
  isFetching: false,
  errorMsg: '',
}

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_RECOMMENDATIONS:
      return {
        ...state,
        isFetching: true
      };
    case GET_RECOMMENDATIONS_SUCCESS:
      return {
        ...state,
        ...payload,
        isFetching: false
      };
    case GET_RECOMMENDATIONS_ERROR:
      return {
        ...state,
        isFetching: false,
        errorMsg: payload
      };
    case RESET_RECOMMENDATIONS:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}