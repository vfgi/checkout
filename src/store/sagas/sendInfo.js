import axios from 'axios';
import {
  call,
  put,
  takeEvery,
  spawn,
} from 'redux-saga/effects';

import {
  Types as cardTypes,
  Actions as cardInfo,
} from '../ducks/card';

const apiCall = (action) => {
    return axios.post('/pagar', 
      action.payload
    ,
   ).then(response => response.data)
    .catch(err => {
      throw err;
    });
  }

function* postCardInfo(action) {
  try {
    const response = yield call(apiCall(action.payload));

    yield put(cardInfo.putCardInfo(response.data));
  } catch (error) {
    console.log(error);
  }
}

function* watchGetLimitInfo() {
  yield takeEvery(cardTypes.PUT_CARD, postCardInfo);
}

export default function* init() {
  yield spawn(watchGetLimitInfo);
}