import { CartActionTypes } from "./cart.action.types"
import addItemToCart from "./cart.util"

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}


const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_HIDDEN_VALUE:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_ITEMS:
            return {
                ...state,
                cartItems: addItemToCart([...state.cartItems],action.payload)
            }
        default:
            return state
    }
}

export default cartReducer;