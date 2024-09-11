import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: #13131f;
  position: fixed;
  top: 0;
  z-index: 1000;
  border-bottom: 3px solid #0a8d19;
  height: 80px;
  display: flex;
  justify-content: end;
  align-items: center;
  padding-right: 35px;
`;

export const Nav = styled.div`
  a {
    font-size: 23px;
    color: white;
    text-decoration: none;
    margin: 0 45px;

    &.active {
      border-bottom: 3px solid #0a8d19;
    }

    &:hover {
      opacity: 0.8;
    }
  }

  @media (max-width: 900px) {
    position: absolute;
    top: 80px;
    right: 0;
    flex-direction: column;
    background: #13131f;
    border-bottom: 3px solid #0a8d19;
    width: 100%;
    padding: 10px;
    display: ${({ className }) => (className === 'open' ? 'flex' : 'none')};
    gap: 40px;
    align-items: center;
    height: 52vh;
  }
`;

export const HamburgerMenu = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 5px;
  transition:
    transform 0.3s ease,
    background-color 0.3s ease;

  span {
    width: 30px;
    height: 3px;
    background-color: white;
    transition: background-color 0.3s ease;
  }

  &.open {
    transform: rotate(90deg);
  }

  &.open span {
    background-color: #03fa6e;
  }

  @media (max-width: 900px) {
    display: flex;
  }
`;
