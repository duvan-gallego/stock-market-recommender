import Axios from 'axios';

import {
  BE_ERROR,
  DEFAULT_ERROR,
  NETWORK_ERROR
} from '../messages';

const BE_URL = {
  development: 'https://www.mybeindevelpment.com',
  production: 'https://www.mysuperproductionurl.com'
};

export const apiInstance = (() => (
  Axios.create({
    baseURL: `${BE_URL[process.env.NODE_ENV]}/api`,
  })
))();

// TODO: Function to generate randomly socialMedia post, only used to mock data
// These function should be deleted when BE is ready
export const socialMediaGenerator = (stockSymbol, socialNetwork, amount) => {
  let socialMediaMessages = [];
  for (let i = 0; i < amount; i++) {
    socialMediaMessages.push(
      {
        socialNetwork: socialNetwork === 'All' ? ((Math.floor(Math.random() * 2)) === 1 ? 'Twitter' : 'Facebook') : socialNetwork,
        message: `We are actually talking about ${stockSymbol}, message number ${i}`
      }
    )
  }
  return socialMediaMessages;
}

export function errorHandler(error = {}) {
  let message = DEFAULT_ERROR;
  if (error.toString() === BE_ERROR) {
    message = NETWORK_ERROR
  }
  throw new Error(message);
}