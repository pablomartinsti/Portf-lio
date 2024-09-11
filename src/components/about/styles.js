import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 70%;
  min-height: 80vh;

  h1 {
    text-align: center;
    color: white;

    span {
      color: #0a8d19;
    }
  }

  p {
    font-weight: 100;
    margin: 60px 0;
    color: white;
    font-size: 20px;
    line-height: 2;
    text-align: justify;
    opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
    transform: ${({ isVisible }) =>
      isVisible ? 'translateY(0)' : 'translateY(20px)'};
    transition:
      opacity 1.5s ease-in,
      transform 1.5s ease-in;
  }
`;
