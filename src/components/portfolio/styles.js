import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: white;
    text-align: center;
    margin-top: 100px;
  }

  span {
    color: #0a8d19;
  }

  h2 {
    color: white;
    border-bottom: 3px solid #0a8d19;
    width: 95%;
  }
`;

export const Projects = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
  gap: 60px;
  grid-template-columns: repeat(auto-fit, minmax(380px, auto));
  margin: 50px;

  .card {
    opacity: 0;
    transform: translateY(20px);
    transition:
      opacity 1s ease-in,
      transform 1s ease-in;
    position: relative;

    &.visible {
      opacity: 0.7;
      transform: translateY(0);
    }
    &:hover {
      transform: scale(1.1);
      opacity: 1;
      @media (max-width: 450px) {
        transform: none;
      }
    }
    img {
      border-radius: 15px;
      width: 360px;
      height: 215px;
      border: 3px solid #0a8d19;
    }

    .ver-mais {
      position: absolute;
      bottom: 50px;
      left: 47.4%;
      width: 360px;
      transform: translateX(-50%);

      border-radius: 0 0 10px 10px;
      text-align: center;
      transition:
        bottom 1s ease,
        opacity 1s ease;
      opacity: 0;

      button {
        color: white;
        background: #0a8d19;
        padding: 10px;
        border: 3px solid #0a8d19;
        margin: 7px 0;
        border-radius: 0 0 10px 10px;
        width: 100%;
        text-decoration: none;
        cursor: pointer;
      }

      button:hover {
        background: #0a8d19;
        color: white;
      }

      button:active {
        opacity: 0.8;
      }
    }

    &:hover .ver-mais {
      bottom: -32px;
      opacity: 1;
    }
  }
`;

export const Section = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
  gap: 60px;
  grid-template-columns: repeat(auto-fit, minmax(380px, auto));
  margin: 50px;

  .card {
    width: 365px;
    border-radius: 15px;
    opacity: 0;
    transform: translateY(20px);
    transition:
      opacity 1s ease-in,
      transform 1s ease-in;
    position: relative;
    &.visible {
      opacity: 0.7;
      transform: translateY(0);
      cursor: pointer;
    }
    &:hover {
      transform: scale(1.1);
      opacity: 1;
      @media (max-width: 450px) {
        transform: none;
      }
    }

    img {
      border-radius: 15px;
      width: 360px;
      height: 215px;
      border: 3px solid #0a8d19;
    }

    .ver-mais {
      position: absolute;
      bottom: 50px;
      left: 49.4%;
      width: 360px;
      transform: translateX(-50%);
      border-radius: 0 0 10px 10px;
      text-align: center;
      transition:
        bottom 1s ease,
        opacity 1s ease;
      opacity: 0;

      button {
        color: white;
        background: #0a8d19;
        padding: 10px;
        border: 3px solid #0a8d19;
        margin: 7px 0;
        border-radius: 0 0 10px 10px;
        text-decoration: none;
        cursor: pointer;
        width: 100%;
      }

      button:hover {
        background: #0a8d19;
        color: white;
      }

      button:active {
      }
    }

    &:hover .ver-mais {
      bottom: -32px;
      opacity: 1;
    }
  }
`;
