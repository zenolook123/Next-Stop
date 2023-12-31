import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import members from './members.reducer'
import myMeetReducer from './myMeet.reducer';
import editMeetReducer from './editMeet.reducer';
import allMeetReducer from './allMeet.reducer';
import addCarReducer from './addCar.reducer';
import inviteReducer from './invite.reducer';
// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user,
  members,
  myMeetReducer,
  editMeetReducer,
  allMeetReducer,
  addCarReducer,
  inviteReducer
});

export default rootReducer;
