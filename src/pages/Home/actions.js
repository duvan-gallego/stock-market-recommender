import {
  GET_RECOMMENDATIONS,
} from './constants';

export const getRecommendations = (stockSymbol, socialNetwork, startDate, endDate) => ({
  type: GET_RECOMMENDATIONS,
  data: {
    stockSymbol,
    socialNetwork,
    startDate,
    endDate,
  }
});
