import styled from 'styled-components';

export const Container = styled.div`
  h1 {
    color: #fff;
    font-size: 52px;
  }

  h2 {
    color: #fff;
    margin-top: 20px;
    font-size: 24px;
  }

  div {
    margin-top: 15px;

    a {
      color: #3b9eff;
      font-size: 18px;
      opacity: 0.8;
      transition: opacity 0.2s;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
