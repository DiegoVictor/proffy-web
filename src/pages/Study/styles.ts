import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  form {
    margin-top: 3.2rem;

    @media (min-width: 700px) {
      bottom: -28px;
      column-gap: 16px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      position: absolute;
    }

    @media (max-width: 699px) {
      > div + div {
        margin-top: 1.4rem;
      }
    }

    button {
      align-items: center;
      background-color: var(--color-secundary);
      border: 0px;
      border-radius: 0.8rem;
      color: var(--color-button-text);
      cursor: pointer;
      display: flex;
      font-family: Archivo;
      font-size: 1.6rem;
      font-weight: 700;
      justify-content: center;
      height: 5.6rem;
      margin-top: 3.2rem;
      text-decoration: none;
      transition: background-color 0.2s;
      width: 100%;

      &:hover {
        background-color: var(--color-secundary-dark);
      }
    }

    label {
      color: var(--color-text-in-primary);
    }
  }
`;

export const Teachers = styled.div`
  margin: 3.2rem auto;
  width: 90%;

  @media (min-width: 700px) {
    margin: 0px auto;
    max-width: 740px;
    padding: 3.2rem 0px;
  }
`;
