import {
  GET_SM_MESSAGES,
} from './constants';

export const getSMMessages = (stockSymbol, socialNetwork, amountOfSocialMediaPost) => ({
  type: GET_SM_MESSAGES,
  data: {
    stockSymbol,
    socialNetwork,
    amountOfSocialMediaPost,
  }
});
