import styled from 'styled-components';

import SuccessBackground from '../../assets/images/success-background.svg';

export const Container = styled.div`
  align-items: center;
  background-color: var(--color-primary);
  background-image: url(${SuccessBackground});
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  position: absolute;
  top: 0px;
  width: 100%;
  z-index: 2;

  @media (max-width: 799px) {
    background-position: right 50%;
  }

  > div {
    align-items: center;
    background-color: var(--color-primary);
    background-image: none;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 799px) {
      min-height: 50px;
      background-image: none;
    }

    img {
      height: 100px;

      @media (max-width: 799px) {
        display: none;
      }
    }

    > div {
      align-items: center;
      display: flex;
      flex-direction: column;
    }
  }

  h1 {
    color: var(--color-title-in-primary);
    font-family: Archivo;
    font-size: 54px;
    font-weight: 700;
    line-height: 50px;
    text-align: center;
  }

  h3 {
    color: var(--color-text-in-primary);
    font-family: Poppins;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    margin: 24px 0px 80px;
    text-align: center;
  }

  img {
    margin-bottom: 55px;

    @media (max-width: 799px) {
      display: block;
    }
  }

  button {
    padding: 15px 40px;
  }
`;
