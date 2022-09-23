import { useSelector } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';
import Button from '../button/button.component';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';

import { useNavigate } from 'react-router-dom';

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);

  const navigate = useNavigate();

  const toCheckoutHandler = () => navigate('/checkout');
  return (
    <div className="cart-dropdown">
      <div className="cart-dropdown__products-box">
        {cartItems.map(cartItem => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>

      <Button buttonType="inverted" className="cart-dropdown__btn" onClick={toCheckoutHandler}>
        go to checkout
      </Button>
    </div>
  );
};

export default CartDropdown;
