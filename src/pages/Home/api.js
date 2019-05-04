import { apiInstance, errorHandler } from '../../api';

export const getRecommendationsApi = () => (


  // Uncomment this code and delete the previous one, when BE is ready
  apiInstance({
    url: '/recommendations',
    method: 'get'
  })
    .then(({ data: result }) => result)
    .catch(errorHandler)
);

