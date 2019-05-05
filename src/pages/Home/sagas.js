import { call, put, takeLatest, delay } from 'redux-saga/effects';
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
    const data = yield call(getRecommendationsApi, payload.data);
    // TODO: This line is added only to better simulate the BE, delete it when BE is ready
    yield delay(2000);

    yield put({ type: GET_RECOMMENDATIONS_SUCCESS, payload: data });
  } catch (e) {
    yield put({ type: GET_RECOMMENDATIONS_ERROR, payload: e });
  }
}

export function* getRecommendationsWatcher() {
  yield takeLatest(GET_RECOMMENDATIONS, getRecommendationsWorker);
}
