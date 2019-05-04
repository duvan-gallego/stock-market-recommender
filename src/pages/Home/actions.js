import {
  GET_RECOMMENDATIONS,
} from './constants';

export const getRecommendations = (stockSymbol) => ({
  type: GET_RECOMMENDATIONS,
  stockSymbol,
});
