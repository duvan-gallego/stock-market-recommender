import { call, put, takeLatest, delay } from 'redux-saga/effects';
import {
  GET_SM_MESSAGES,
  GET_SM_MESSAGES_SUCCESS,
  GET_SM_MESSAGES_ERROR,
} from './constants';

import {
  getRecommendationsApi,
} from './api';

function* getMessagesWorker(payload) {
  try {
    const data = yield call(getRecommendationsApi, payload.data);
    // TODO: This line is added only to better simulate the BE, delete it when BE is ready
    yield delay(1500);

    yield put({ type: GET_SM_MESSAGES_SUCCESS, payload: data });
  } catch (e) {
    yield put({ type: GET_SM_MESSAGES_ERROR, payload: e });
  }
}

export function* getMessagesWatcher() {
  yield takeLatest(GET_SM_MESSAGES, getMessagesWorker);
}
