import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchAllMeets() {
  try {
    const response = yield axios.get('/api/meets');
      yield put({ type: 'SET_ALL_MEETS', payload: response.data });

  } catch (error) {
    console.log('Meet get request failed', error);
  }
}


function* meetSaga() {
  yield takeLatest('FETCH_ALL_MEETS', fetchAllMeets);
}

export default meetSaga;
