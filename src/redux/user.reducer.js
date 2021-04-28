const INITIAL_STATE = {
    currentUser: null
}


const userReducer = (action, state = INITIAL_STATE) => {

    switch (action) {
        case 'SET_CURRENT_USER':

            return {
                ...state,
                currentUser: action.payload
            }

        default:
            return state;

    }

}

export default userReducer;