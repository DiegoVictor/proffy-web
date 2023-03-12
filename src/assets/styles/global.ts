import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-background: #F0F0F7;
    --color-primary-lighter: #9871F5;
    --color-primary-light: #916BEA;
    --color-primary: #8257E5;
    --color-primary-dark: #774DD6;
    --color-primary-darker: #6842C2;
    --color-secundary: #04D361;
    --color-secundary-dark: #04BF58;
    --color-title-in-primary: #FFFFFF;
    --color-text-in-primary: #D4C2FF;
    --color-text-title: #32264D;
    --color-text-complement: #9C98A6;
    --color-text-base: #6A6180;
    --color-line-in-white: #E6E6F0;
    --color-input-background: #F8F8FC;
    --color-button-text: #FFFFFF;
    --color-button-grey: #DCDCE6;
    --color-box-base: #FFFFFF;
    --color-box-footer: #FAFAFC;
    --color-form-error: #DD1030;

    font-size: 60%;

    @media (min-width: 700px) {
      font-size: 62.5%;
    }
  }

  * {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
  }

  html, body, #root {
    height: 100vh;
  }

  body {
    background-color: var(--color-background);
  }

  #root {
    align-items: center;
    display: flex;
    justify-content: center;
  }

  body, input, button, textarea {
    color: var(--color-text-base);
    font-family: Poppins;
    font-size: 1.6rem;
    font-weight: 500;
  }
`;

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
