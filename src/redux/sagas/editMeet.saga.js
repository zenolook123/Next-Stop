import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* fetchEditMeet(action) {
    try {
      const response = yield axios.get(`/api/meets/${action.payload}`);
      yield put({ type: 'SET_EDIT_MEET', payload: response.data });
    } catch (error) {
      console.log('Meet get request failed', error);
    }
  }

  function* editMeetSaga() {
    yield takeLatest('EDIT_MEET', fetchEditMeet)
  }
  
  export default editMeetSaga