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

export function errorHandler(error = {}) {
  let message = DEFAULT_ERROR;
  if (error.toString() === BE_ERROR) {
    message = NETWORK_ERROR
  }
  throw new Error(message);
}