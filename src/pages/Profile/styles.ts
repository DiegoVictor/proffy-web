import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  header {
    > section {
      padding-bottom: 0px;
      margin: 64px auto calc(3.2rem + 64px);
    }
  }
`;

export const Main = styled.div`
  background-color: var(--color-box-base);
  border-radius: 0.8rem;
  margin: -3.2rem auto 3.2rem;
  max-width: 74rem;
  padding-top: 6.4rem;
  overflow: hidden;
  width: 100%;

  fieldset {
    border: 0px;
    padding: 0px 2.4rem;

    & + fieldset {
      margin-top: 6.4rem;
    }

    @media (min-width: 700px) {
      padding: 0px 6.4rem;
    }

    > div + div {
      margin-top: 2.4rem;
    }

    legend {
      align-items: center;
      border-bottom: 1px solid var(--color-line-in-white);
      color: var(--color-text-title);
      display: flex;
      font-family: Archivo;
      font-size: 2.4rem;
      font-weight: 700;
      justify-content: space-between;
      margin-bottom: 2.4rem;
      padding-bottom: 1.6rem;
      width: 100%;
    }
  }
`;

export const Avatar = styled.div`
  align-items: center;
  flex-direction: column;

  h2 {
    color: var(--color-title-in-primary);
    font-family: Archivo;
    font-weight: 700;
    font-size: 36px;
    line-height: 25px;
    margin-bottom: 16px;
  }

  h3 {
    color: var(--color-text-in-primary);
    font-family: Poppins;
    font-size: 24px;
    line-height: 26px;
  }

  img {
    border-radius: 50%;
    margin-bottom: 32px;
    width: 180px;
  }
`;

export const Placeholder = styled.div`
  align-items: center;
  background-color: var(--color-primary-lighter);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  height: 180px;
  margin-bottom: 32px;
  width: 180px;

  span {
    color: var(--color-primary-dark);
    font-size: 45px;
    font-weight: 700;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  justify-content: space-between;

  > div {
    width: calc(50% - 16px);
  }

  & + div {
    > div:first-child {
      width: calc(60% - 16px);
    }

    > div:last-child {
      width: calc(40% - 16px);
    }
  }
`;

export const Footer = styled.div`
  background-color: var(--color-box-footer);
  border-top: 1px solid var(--color-line-in-white);
  margin-top: 6.4rem;
  padding: 4rem 2.4rem;

  @media (min-width: 700px) {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 4rem 6.4rem;
  }

  > div {
    align-items: center;
    color: var(--color-text-complement);
    display: flex;
    font-size: 1.4rem;
    justify-content: center;
    line-height: 2.4rem;

    @media (min-width: 700px) {
      justify-content: space-between;
    }

    img {
      margin-right: 2rem;
    }

    span {
      color: var(--color-primary);
      display: inline-block;
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

    @media (min-width: 700px) {
      margin-top: 0px;
      width: 20rem;
    }

    &:hover {
      background-color: var(--color-secundary-dark);
    }
  }
`;
