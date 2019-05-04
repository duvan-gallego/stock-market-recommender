import { apiInstance, errorHandler } from '../../api';

export const getRecommendationsApi = (stockSymbol) => {

  // CODE TO GENERATE MOCK DATA
  const AMOUNT_OF_POST_TO_GENERATE = Math.floor(Math.random() * 100);
  const stockSymbolUpperCase = `$${stockSymbol.toUpperCase()}`;
  const buySaleHold = Math.floor(Math.random() * 3);
  const recommendation = buySaleHold === 0 ? 'BUY' : buySaleHold === 1 ? 'SELL' : 'HOLD';
  let socialMediaMessages = [];
  for (let i = 0; i < AMOUNT_OF_POST_TO_GENERATE; i++) {
    socialMediaMessages.push(
      {
        socialNetwork: (Math.floor(Math.random() * 2)) === 1 ? 'Twitter' : 'Facebook',
        message: `We are actually talking about ${stockSymbolUpperCase} message number ${i}`
      }
    )
  }

  // Mock Data returned
  return {
    stockSymbol: stockSymbolUpperCase,
    stockPrice: Math.floor(Math.random() * 1000),
    countOfSocialMediaPost: AMOUNT_OF_POST_TO_GENERATE,
    dateOfUpdate: new Date(),
    recommendation,
    socialMediaMessages,
  }

  // Uncomment this code and delete all the previous one, when BE is ready
  /*return apiInstance({
    url: '/recommendations',
    method: 'get',
    params: stockSymbol
  })
    .then(({ data: result }) => result)
    .catch(errorHandler)*/

};
