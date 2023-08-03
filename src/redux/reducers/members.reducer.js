const memberReducer = (state = [{id:0, username:' members by clicking upload on the first screen'}], action) => {
    switch (action.type) {
      case 'SET_MEMBERS':
        return action.payload;
      case 'UNSET_MEMBERS':
        return {};
      default:
        return state;
    }
  };
  

  export default memberReducer;
  