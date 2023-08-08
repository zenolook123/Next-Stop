import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchInvites() {
  try {
    const response = yield axios.get('/api/invites');
      yield put({ type: 'SET_INVITES', payload: response.data });

  } catch (error) {
    console.log('Meet get request failed', error);
  }
}
function* sendInvite(action){
    try{
        const response = yield axios.post('/api/invites', action.payload);
    } catch (error){
        console.log("error sending invite", error)
    }
}
function* acceptInvite(action){
    try{
        const response = yield axios.put('/api/invites', action.payload);
    } catch (error){
        console.log("error accepting invite", error)
    }
}
function* declineInvite(action){
    try{
        const response = yield axios.put('/api/invites', action.payload);
    } catch (error){
        console.log("error declining invite", error)
    }
}
function* InviteSaga() {
  yield takeLatest('FETCH_INVITES', fetchInvites);
  yield takeLatest('SEND_INVITE', sendInvite)
  yield takeLatest('ACCEPT_INVITE', acceptInvite)
  yield takeLatest('DECLINE_INVITE', declineInvite)
}

export default InviteSaga;
