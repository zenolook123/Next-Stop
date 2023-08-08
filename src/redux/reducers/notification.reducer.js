const notificationReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_NOTIFICATIONS':
        return action.payload;
      case 'CHECK_NOTIFICATIONS':
        return [...state, action.payload]
      case 'CLEAR_NOTIFICATIONS':
        return {};
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default notificationReducer;
  