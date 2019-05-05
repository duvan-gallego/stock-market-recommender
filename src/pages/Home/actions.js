import {
  GET_RECOMMENDATIONS,
} from './constants';

export const getRecommendations = (stockSymbol, socialNetwork) => ({
  type: GET_RECOMMENDATIONS,
  data: {
    stockSymbol,
    socialNetwork,
  }
});
