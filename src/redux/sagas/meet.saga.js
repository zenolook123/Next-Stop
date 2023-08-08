import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';



function* fetchMeets() {
  try {
    const response = yield axios.get('/api/meets/mymeets');
      yield put({ type: 'SET_MY_MEETS', payload: response.data });
  } catch (error) {
    console.log('Meet get request failed', error);
  }
}

function* setCreateMeets(action){

    try {
        console.log(action.payload)
        const response = yield axios.post('/api/meets', action.payload);
        console.log(response)
        yield put ({ type:'FETCH_MEETS' })
    }
    catch(error) {
        console.log('error is', error)
    }
}

function* meetSaga() {
  yield takeLatest('FETCH_MY_MEETS', fetchMeets);
  yield takeLatest('SET_CREATE_MEET', setCreateMeets)
}

export default meetSaga;
