import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  > div:first-child {
    section {
      margin-bottom: 6.4rem;

      @media (min-width: 700px) {
        margin-bottom: 0px;
      }
    }
  }
`;

export const Main = styled.main`
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

      div {
        align-items: center;
        display: flex;
        justify-content: space-between;
        width: 100%;
      }

      button {
        background-color: transparent;
        border: 0px;
        color: var(--color-primary);
        font-family: Archivo;
        font-size: 1.6rem;
        font-weight: 700;
        cursor: pointer;
        transition: color 0.2s;

        &:hover {
          color: var(--color-primary-dark);
        }
      }
    }
  }

  label {
    color: var(--color-text-complement);
  }
`;

export const InputGroup = styled.div`
  display: flex;

  @media (max-width: 699px) {
    flex-wrap: wrap;
  }

  > div {
    width: 100%;

    @media (min-width: 700px) {
      &:first-child {
        margin-right: 16px;
        width: 60%;
      }

      &:last-child {
        margin-left: 16px;
        width: 40%;
      }
    }
  }
`;

export const Footer = styled.footer`
  background-color: var(--color-box-footer);
  border-top: 1px solid var(--color-line-in-white);
  margin-top: 6.4rem;
  padding: 4rem 2.4rem;

  @media (min-width: 700px) {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 4.0rem 6.4rem;

  p {
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

export const ScheduleItem = styled.div`
  @media (min-width: 700px) {
    column-gap: 1.6rem;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;

    > div {
      margin-top: 0px !important;
    }
  }
`;
