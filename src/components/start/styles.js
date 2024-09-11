import styled from 'styled-components';

export const Container = styled.div`
  background: #13131f;
`;

export const Section = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: calc(100vh + 80px);
  color: white;
  width: 100vw;
  line-height: 60px;

  .foto {
    img {
      width: 300px;
      border-radius: 160px;

      @media (max-width: 900px) {
        margin: 60px 0;
      }
    }
  }

  @media (max-width: 900px) {
    flex-direction: column;
    margin-top: 100px;
    width: 100%;
  }
`;

export const Text = styled.div`
  h2 {
    font-size: 35px;
    font-weight: 100;
  }

  h1 {
    color: #0a8d19;
    font-size: 40px;
    font-weight: 600;
    display: inline-block;
  }

  @media (max-width: 590px) {
    h2 {
    }
    h1 {
      font-size: 40px;
    }
  }

  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: white;
    }
  }
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 70px;

  @media (max-width: 500px) {
    flex-direction: column;
  }
  .download {
    padding: 15px;
    font-size: 25px;
    font-weight: 100;
    display: flex;
    align-items: center;
    border-radius: 20px;
    height: 70px;
    text-decoration: none;
    background: white;
    color: black;
    cursor: pointer;
  }
  .download:hover {
    color: white;
    background: transparent;
    border: solid 2px #0a8d19;
  }
  .download:active {
    opacity: 0.7;
  }

  .contact {
    padding: 15px;
    font-size: 25px;
    font-weight: 100;
    display: flex;
    align-items: center;
    gap: 30px;
    background: transparent;
    border: 2px solid #0a8d19;
    color: white;
    border-radius: 20px;
    height: 70px;
    text-decoration: none;
    cursor: pointer;
    img {
      width: 40px;
    }
  }
  .contact:hover {
    background: white;
    color: black;
  }
  .contact:active {
    opacity: 0.7;
  }
`;
