import { combineReducers } from 'redux';

import recommendations from '../pages/Home/redux';

const rootReducer = combineReducers({
  recommendations
});

export default rootReducer;