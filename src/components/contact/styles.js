import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 200px;
  border-top: 3px solid #0a8d19;
  width: 100%;

  h1 {
    color: white;
    width: 100%;
    text-align: center;
  }
  span {
    color: #0a8d19;
  }
  .contatos {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 100px;
    margin: 100px 0;
    @media (max-width: 900px) {
      flex-direction: column;
    }

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    img {
      width: 50px;
      cursor: pointer;
    }
    p {
      margin-top: 10px;
      color: white;
    }
    a:hover {
      transform: scale(1.2);
    }
  }
`;
