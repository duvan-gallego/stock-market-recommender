import { call, put, takeLatest } from 'redux-saga/effects';
import {
  GET_RECOMMENDATIONS,
  GET_RECOMMENDATIONS_SUCCESS,
  GET_RECOMMENDATIONS_ERROR,
} from './constants';

import {
  getRecommendationsApi,
} from './api';

function* getRecommendationsWorker(payload) {
  try {
    const data = yield call(getRecommendationsApi, payload.stockSymbol);
    yield put({ type: GET_RECOMMENDATIONS_SUCCESS, payload: data });
  } catch (e) {
    yield put({ type: GET_RECOMMENDATIONS_ERROR, payload: e });
  }
}

export function* getRecommendationsWatcher() {
  yield takeLatest(GET_RECOMMENDATIONS, getRecommendationsWorker);
}
