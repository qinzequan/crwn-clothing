import { useDispatch, useSelector } from 'react-redux';

import { selectIsCartOpen, selectCartCount } from '../../store/cart/cart.selector';
import { setIsOpen } from '../../store/cart/cart.action';
import { ReactComponent as ShopIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';

const CartIcon = () => {
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);

  const dispatch = useDispatch();
  return (
    <button className="cart-icon" onClick={() => dispatch(setIsOpen(!isCartOpen))}>
      <ShopIcon className="cart-icon__icon" />
      <span className="cart-icon__count">{cartCount}</span>
    </button>
  );
};

export default CartIcon;
