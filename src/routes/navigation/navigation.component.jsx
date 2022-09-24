import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as CrownLogo } from '../../assets/crown.svg';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { NavigationContainer, Nav, NavLink } from './navigation.style';
import { selectCurrentUser } from '../../store/user/user.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { signOutStart } from '../../store/user/user.action';

const Navigation = ({ className }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <>
      <NavigationContainer className={className}>
        <NavLink to="/">
          <CrownLogo className="logo" />
        </NavLink>
        <Nav>
          <NavLink to="/shop" className="navigation__link">
            shop
          </NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={() => dispatch(signOutStart())}>
              sign out
            </NavLink>
          ) : (
            <NavLink to="/auth" className="navigation__link">
              sign in
            </NavLink>
          )}
          <CartIcon />
        </Nav>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
