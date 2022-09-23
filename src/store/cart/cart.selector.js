import { createSelector } from 'reselect';

export const selectCartRudecer = state => state.cart;

export const selectIsCartOpen = createSelector([selectCartRudecer], cart => cart.isCartOpen);

export const selectCartItems = createSelector([selectCartRudecer], cart => cart.cartItems);

export const selectCartCount = createSelector([selectCartItems], cartItems => cartItems.reduce((total, item) => total + item.quantity, 0));

export const selectcartTotal = createSelector([selectCartItems], cartItems => cartItems.reduce((total, item) => total + item.quantity * item.price, 0));
