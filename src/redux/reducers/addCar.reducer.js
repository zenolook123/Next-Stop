const addCarReducer = (state = [], action) => {

    switch (action.type) 
    {
    case 'SET_ADD_CAR':
    return [...state, ...action.payload];
    case 'UNSET_CARS':
    return [];
    default:
    return state;
    }
    };
    
    export default addCarReducer;