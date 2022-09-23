import styled from 'styled-components';

export const SpinnerContainer = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  border: 3px solid rgba(195, 195, 195, 0.6);
  border-top-color: #636767;
  animation: spin 1s ease-in-out infinite;

  margin: 30vh auto;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
