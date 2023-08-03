import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import { useDispatch } from 'react-redux';

function* fetchMeets() {
    const dispatch = useDispatch()
  try {
    const response = yield axios.get('/api/meets');
    yield put ({ type:'UNSET_MEETS' })
    yield put({ type: 'SET_MEETS', payload: response.data });
  } catch (error) {
    console.log('Meet get request failed', error);
  }
}

function* setMeets(action){
    try {
        console.log(action.payload)
        const response = yield axios.post('/api/meets', action.payload);
        // dispatch({
        //     type:'FETCH_MEETS'
        // })
    }
    catch(error) {
        console.log('error is', error)
    }
}

function* meetSaga() {
  yield takeLatest('FETCH_MEETS', fetchMeets);
  yield takeLatest('SET_CREATE_MEET', setMeets)
}

export default meetSaga;
