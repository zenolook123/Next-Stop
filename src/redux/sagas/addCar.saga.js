import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* fetchMyCars(action) {
    try {
        console.log('In fetch add car saga')
        yield put({ type: 'UNSET_CARS' });
        const response = yield axios.get(`/api/cars/mycars/${action.payload}`);
        yield put({ type: 'SET_ADD_CAR', payload: response.data })
    } catch (error) {
        console.log('Meet get request failed', error);
    }
}

function* addCar(action) {
    axios.post('/api/cars/mycars', action.payload)
        .then((response) => {
            console.log('ymmObject is', action.payload);
        })
        .catch((error) => {
            console.error('Error uploading file:', error);
        });
        yield put({ type: 'FETCH_CARS', payload:action.id});
}

function* addMod(action) {
    axios.put(`/api/cars/mycars/mods/${action.id}`, {mods:action.payload})
        .then((response) => {
                console.log(response)
        })
        .catch((error) => {
            console.error('Error uploading file:', error);
        });
        yield put({ type: 'FETCH_CARS'})
}

function* addCarSaga() {
    yield takeLatest('FETCH_CARS', fetchMyCars)
    yield takeLatest('ADD_CAR', addCar)
    yield takeLatest('ADD_MOD', addMod)
}

export default addCarSaga