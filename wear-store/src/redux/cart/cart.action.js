import { CartActionTypes } from "./cart.action.types";

export const toggleHidden = ({
    type: CartActionTypes.TOGGLE_HIDDEN_VALUE
});

export const addItems = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});

export const clearItemFromCart = item => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
});


export const removeItemFromCart = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
});
