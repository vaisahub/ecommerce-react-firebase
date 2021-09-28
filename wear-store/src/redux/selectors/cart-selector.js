import { createSelector } from 'reselect'

const selectCart = state => state.cart

export const selectCartHidden = createSelector(
    selectCart, (cart) => cart.hidden
);

export const selectCartItems =  createSelector(
    selectCart, (cart) => cart.cartItems
);

export const cartItemCount = createSelector(
    selectCartItems, (cartItems) => cartItems.reduce((acQuantity, item) => acQuantity + item.quantity, 0)
);