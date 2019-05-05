import {
  GET_SM_MESSAGES,
  GET_SM_MESSAGES_SUCCESS,
  GET_SM_MESSAGES_ERROR
} from './constants';

const initialState = {
  socialNetwork: null,
  messages: [],
  isFetching: false,
  errorMsg: '',
}

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_SM_MESSAGES:
      return {
        ...state,
        isFetching: true
      };
    case GET_SM_MESSAGES_SUCCESS:
      return {
        ...state,
        ...payload,
        isFetching: false
      };
    case GET_SM_MESSAGES_ERROR:
      return {
        ...state,
        isFetching: false,
        errorMsg: payload
      };
    default:
      return state;
  }
}