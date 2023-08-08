import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* fetchMyCars(action) {
    try {
      const response = yield axios.get(`/api/cars/mycars/${action.payload}`);
      yield put({ type: 'SET_ADD_CAR', payload: response.data });
    } catch (error) {
      console.log('Meet get request failed', error);
    }
  }

  function* addCarSaga() {
    yield takeLatest('FETCH_CARS', fetchMyCars)
  }
  
  export default addCarSaga