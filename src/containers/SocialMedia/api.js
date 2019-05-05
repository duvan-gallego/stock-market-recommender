import { apiInstance, errorHandler, socialMediaGenerator } from '../../api';

export const getRecommendationsApi = (params) => {
  // TODO: CODE TO GENERATE MOCK DATA, DELETE IT WHEN BE IS READY
  const socialNetwork = params.socialNetwork;
  const amountOfSocialMediaPost = params.amountOfSocialMediaPost;
  let socialMediaMessages = socialMediaGenerator(params.stockSymbol, socialNetwork, amountOfSocialMediaPost);

  // Mock Data returned
  return {
    socialNetwork,
    amountOfSocialMediaPost,
    messages: socialMediaMessages,
    dateOfUpdate: new Date(),
  }

  // TODO: Uncomment this code and delete all the previous one, when BE is ready
  /*return apiInstance({
    url: '/socialmediamessages',
    method: 'get',
    params: params
  })
    .then(({ data: result }) => result)
    .catch(errorHandler)*/
};
