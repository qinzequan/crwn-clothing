import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  display: flex;
  position: relative;
`;

export const Nav = styled.div`
  margin-left: auto;

  display: flex;
  align-items: center;
  gap: 4rem;
`;

export const NavLink = styled(Link)`
  &,
  &:link,
  &:visited {
    text-transform: uppercase;
    text-decoration: none;
    color: #000;

    font-size: 1.2rem;
  }
`;

// .navigation {

//   &__nav {

//   }

//   &__link {

//   }
// }
