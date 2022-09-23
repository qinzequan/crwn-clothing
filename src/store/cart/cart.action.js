import { createAction } from '../../utils/reducer/reducer.utils';
import { CART_ACTION_TYPES } from './cart.types';

const addCartItem = (cartItems, product) => {
  const existProduct = cartItems.find(item => item.id === product.id);
  if (existProduct) {
    return cartItems.map(item => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
  }
  return [...cartItems, { ...product, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItem) => {
  const existCartItem = cartItems.find(item => item.id === cartItem.id);
  if (existCartItem.quantity === 1) {
    return cartItems.filter(item => item.id !== cartItem.id);
  }
  return cartItems.map(item => (item.id === cartItem.id ? { ...item, quantity: item.quantity - 1 } : item));
};

const clearCartItem = (cartItems, cartItem) => cartItems.filter(item => item.id !== cartItem.id);

export const addItemToCart = (cartItems, product) => {
  const newCartItems = addCartItem(cartItems, product);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (cartItems, cartItem) => {
  const newCartItems = removeCartItem(cartItems, cartItem);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const clearItemFromCart = (cartItems, cartItem) => {
  const newCartItems = clearCartItem(cartItems, cartItem);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const setIsOpen = bool => createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool);
