import { all } from 'redux-saga/effects'

import {
  getRecommendationsWatcher,
} from '../pages/Home/sagas';

export default function* Sagas() {
  yield all([
    getRecommendationsWatcher(),
  ])
}