import styled from 'styled-components';
import Button from '../button/button.component';

export const PaymentFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const PaymentButton = styled(Button)`
  align-self: end;
`;
