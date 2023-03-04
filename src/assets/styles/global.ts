import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--color-background);
  color: var(--color-text-complement);
  display: flex;
  font-family: Poppins;
  height: 100%;
  width: 100%;

  @media (max-width: 799px) {
    display: block;
  }

  > div {
    width: 50%;

    @media (max-width: 799px) {
      width: 100%;
    }
  }
`;

export const Main = styled.div`
  > div {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 100%;
    margin: auto;
    width: 352px;
  }

  @media (max-width: 799px) {
    height: calc(100% - 50px);

    > div {
      max-width: 352px;
      width: 100%;
    }

    form {
      margin-bottom: 10px;
    }
  }
`;
