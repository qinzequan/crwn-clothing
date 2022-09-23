import { useDispatch, useSelector } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart, removeItemFromCart, clearItemFromCart } from '../../store/cart/cart.action';
import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);

  const { name, imageUrl, price, quantity } = cartItem;

  const addHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));
  const clearHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));

  return (
    <div className="checkout-item">
      <img className="checkout-item__img" src={imageUrl} alt={name} />
      <span>{name}</span>
      <div>
        <span onClick={removeHandler}>&lang;</span>
        <span>{quantity}</span>
        <span onClick={addHandler}>&rang;</span>
      </div>
      <span>{price}</span>
      <span onClick={clearHandler}>&#10005;</span>
    </div>
  );
};

export default CheckoutItem;
