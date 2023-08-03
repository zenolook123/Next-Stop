const meetReducer = (state = {
    imageURL,
    address,
    date,
 }, action) => {

switch (action.type) 
{
case 'SET_CREATE_MEET':
return action.payload;
case 'CLEAR_MEET':
return {};
default:
return state;
}
};

// user will be on the redux state at:
// state.user
export default meetReducer;
