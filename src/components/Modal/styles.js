import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 0;
  overflow: hidden;
`;

export const Container = styled.div`
  background: #1f1f1f;
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  max-width: 900px;
  max-height: 90vh;
  overflow-y: scroll;
  overflow-x: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;
  position: relative;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    width: 90%;
    padding: 15px;
  }

  @media (max-width: 480px) {
    width: 90%;
    padding: 10px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 24px;
  color: white;
  cursor: pointer;

  &:hover {
    font-size: 30px;
  }

  @media (max-width: 480px) {
    font-size: 20px;

    &:hover {
      font-size: 25px;
    }
  }
`;

export const Image = styled.img`
  height: 350px;
  margin-bottom: 20px;
  width: 50%;
  border-radius: 8px;

  @media (max-width: 1150px) {
    width: 100%;
    margin-bottom: 20px;
  }
  @media (max-width: 450px) {
    height: 250px;
  }
`;

export const Section = styled.div`
  color: white;
  width: 97%;
  display: flex;
  gap: 30px;

  @media (max-width: 1150px) {
    flex-direction: column;
    gap: 0px;
  }
`;

export const Description = styled.div`
  margin-bottom: 10px;
  line-height: 1.5;
  height: auto;

  @media (max-width: 1000px) {
    width: 100%;
  }

  h2 {
    font-size: 24px;
    margin-bottom: 10px;
    margin-top: 0;

    @media (max-width: 480px) {
      font-size: 20px;
    }
  }

  div {
    ul {
      padding-left: 30px;
    }
  }

  p {
    font-size: 15px;
    margin-bottom: 20px;
    line-height: 1.6;
    text-align: justify;

    @media (max-width: 480px) {
      font-size: 14px;
    }
  }
`;

export const Buttons = styled.div`
  margin-top: 20px;

  .links {
    display: flex;
    gap: 10px;
    @media (max-width: 450px) {
      flex-direction: column;
      gap: 10px;
    }
  }

  a {
    padding: 10px 10px;
    background-color: #0a8d19;
    color: white;
    flex: 1;
    text-decoration: none;
    text-align: center;
    border-radius: 5px;
    font-size: 16px;
    transition: opacity 0.3s ease;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  a:hover {
    opacity: 0.7;
  }
`;
