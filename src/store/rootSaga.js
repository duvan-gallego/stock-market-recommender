import { all } from 'redux-saga/effects'

import { getRecommendationsWatcher } from '../pages/Home/sagas';
import { getMessagesWatcher } from '../containers/SocialMedia/sagas';

export default function* Sagas() {
  yield all([
    getRecommendationsWatcher(),
    getMessagesWatcher(),
  ])
}