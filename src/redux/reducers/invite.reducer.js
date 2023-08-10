const inviteReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_INVITES':
        return action.payload;
      case 'CLEAR_INVITES':
        return []
      default:
        return state;
    }
  };
  

  export default inviteReducer;
  