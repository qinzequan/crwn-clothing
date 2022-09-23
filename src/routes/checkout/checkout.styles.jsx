import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  width: 120rem;
  margin: 5rem auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  font-size: 2rem;
`;
export const Header = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

export const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  & > * {
    padding-bottom: 2rem;
    border-bottom: 1px solid #000;
  }

  & > *:nth-child(1) {
    padding-top: 2rem;
    border-top: 1px solid #000;
  }
`;
export const Total = styled.div`
  align-self: end;
`;

// .checkout {

//   &__head-box {
//   }

//   &__cartItems {

//   }

//   &__total {

//   }
// }
