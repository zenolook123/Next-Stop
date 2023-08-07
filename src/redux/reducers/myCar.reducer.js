const myCarReducer = (state = [], action) => {

    if (action.type === 'ADD_MY_CAR') {
        return [...state, action.payload]
    }



    return state


}

export default myCarReducer