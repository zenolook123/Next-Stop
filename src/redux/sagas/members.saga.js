import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchMembers() {
  try {
    const response = yield axios.get('/api/members');
    yield put ({ type:'UNSET_MEMBERS' })
    yield put({ type: 'SET_MEMBERS', payload: response.data });
  } catch (error) {
    console.log('Memeber get request failed', error);
  }
}

function* memberSaga() {
  yield takeLatest('FETCH_MEMBERS', fetchMembers);
}

export default memberSaga;
