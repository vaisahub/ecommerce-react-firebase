import { CartActionTypes } from "./cart.action.types";

export const toggleHidden = ({
    type: CartActionTypes.TOGGLE_HIDDEN_VALUE
});

export const addItems = item => ({
    type: CartActionTypes.ADD_ITEMS,
    payload: item
});