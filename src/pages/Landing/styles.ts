import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
`;

export const Header = styled.div`
  background-color: var(--color-primary);
  padding: 0px 20px 32px;
  margin-bottom: 64px;

  @media (max-width: 1120px) {
    margin-bottom: 32px;
  }

  > div {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 0px auto;
    max-width: 1120px;
    padding: 24px 0px;
    width: 100%;

    &:last-child {
      @media (max-width: 1120px) {
        justify-content: center;

        img {
          padding: 0px 10px;
          max-width: 352px;
          width: 100%;
        }
      }
    }

    a {
      cursor: pointer;
      text-decoration: none;
    }
  }
`;

export const User = styled.div`
  align-items: center;
  color: var(--color-text-in-primary);
  display: flex;

  img {
    border-radius: 50%;
    margin-right: 16px;
    height: 40px;
    width: 40px;
  }
`;

export const Logout = styled.div`
  button {
    align-items: center;
    display: flex;
    justify-content: center;
    height: 40px;
    width: 40px;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 92px auto;
  max-width: 1120px;
  width: 100%;

  @media (max-width: 1159px) {
    margin: 64px 0px;
    padding: 0px 20px;
    max-width: 1160px;
  }

  @media (max-width: 1080px) {
    display: flex;
    flex-wrap: wrap;
  }

  @media (max-width: 945px) {
    max-width: 630px;
    margin: 64px auto 0px;
  }

  > div {
    align-items: center;
    display: flex;
    justify-content: end;
    width: 100%;

    &:first-child {
      justify-content: start;

      @media (max-width: 567px) {
        justify-content: center;
      }
    }

    &:nth-child(2) {
      color: var(--color-text-complement);
      font-family: Poppins;
      font-size: 14px;
      font-weight: 400;
      text-align: right;

      @media (max-width: 567px) {
        order: 4;
      }
    }

    @media (max-width: 1080px) {
      margin: auto;
      padding: 0px 10px;
      width: auto;
    }

    @media (max-width: 945px) {
      margin-bottom: 24px;
    }

    @media (max-width: 567px) {
      justify-content: center;
      width: 100%;
    }

    a {
      text-decoration: none;

      button {
        align-items: center;
        color: var(--color-button-text);
        display: flex;
        font-family: Archivo;
        font-size: 20px;
        font-weight: 700;
        justify-content: center;
        height: auto;
        margin: auto;
        padding: 25px 50px;
        width: auto;

        img {
          height: 40px;
          margin-right: 20px;
          width: 40px;
        }
      }
    }
  }
`;
