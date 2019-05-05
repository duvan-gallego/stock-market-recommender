import { combineReducers } from 'redux';

import recommendations from '../pages/Home/redux';
import socialMedia from '../containers/SocialMedia/redux';

const rootReducer = combineReducers({
  recommendations,
  socialMedia,
});

export default rootReducer;