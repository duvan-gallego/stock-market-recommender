import { apiInstance, errorHandler } from '../../api';

// TODO: Function to generate randomly socialMedia post, only used to mock data
// These function should be deleted when BE is ready
const socialMediaGenerator = (stockSymbol, socialNetwork, amount) => {
  let socialMediaMessages = [];
  for (let i = 0; i < amount; i++) {
    socialMediaMessages.push(
      {
        socialNetwork: socialNetwork === 'All' ? ((Math.floor(Math.random() * 2)) === 1 ? 'Twitter' : 'Facebook') : socialNetwork,
        message: `We are actually talking about ${stockSymbol} message number ${i}`
      }
    )
  }
  return socialMediaMessages;
}

export const getRecommendationsApi = (params) => {

  // TODO: CODE TO GENERATE MOCK DATA, DELETE IT WHEN BE IS READY
  const AMOUNT_OF_POST = Math.floor(Math.random() * 100);
  const socialNetwork = params.socialNetwork;
  const stockSymbolUpperCase = `$${params.stockSymbol.toUpperCase()}`;
  const buySaleHold = Math.floor(Math.random() * 3);
  const recommendation = buySaleHold === 0 ? 'BUY' : buySaleHold === 1 ? 'SELL' : 'HOLD';
  let socialMediaMessages = socialMediaGenerator(stockSymbolUpperCase, socialNetwork, 2);


  // Mock Data returned
  return {
    stockSymbol: stockSymbolUpperCase,
    stockPrice: `$${Math.floor(Math.random() * 1000)}`,
    socialNetwork,
    countOfSocialMediaPost: AMOUNT_OF_POST,
    dateOfUpdate: new Date(),
    recommendation,
    socialMediaMessages,
  }

  // TODO: Uncomment this code and delete all the previous one, when BE is ready
  /*return apiInstance({
    url: '/recommendations',
    method: 'get',
    params: params
  })
    .then(({ data: result }) => result)
    .catch(errorHandler)*/

};
