import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    color: white;
    margin: 100px 0;

    span {
      color: #0a8d19;
    }
  }
`;

export const Section = styled.div`
  width: 75%;
  min-height: 100vh;
  display: grid;
  justify-content: center;
  align-items: center;
  gap: 25px;
  grid-template-columns: repeat(auto-fit, minmax(200px, auto));

  .skills {
    perspective: 1000px; 
    width: 200px;
    height: 270px;
    position: relative;
  }

  .skills-inner {
    position: absolute;
    width: 100%;
    height: 100%;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    backface-visibility: hidden;
  }

  .skills:hover .skills-inner {
    transform: rotateY(180deg); 
  }

  .skills-front,
  .skills-back {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .skills-front {
    background-color: transparent
    color: white;
    border:3px solid #0a8d19;
  }

  .skills-back {
    background-color: #fff; 
    color: #0a8d19;
    transform: rotateY(180deg); 
    padding: 20px;
    text-align: center;
  }

  .skills-front img {
    width: 70px;
    margin-bottom: 10px;
  }

  .skills-front h6 {
    color: white;
    font-size: 20px;
    margin-top: 5px;
  }

  .skills-back p {
    font-size: 16px;
    line-height: 24px;
    color: #0a8d19;
  }
`;
