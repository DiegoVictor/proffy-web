import styled from 'styled-components';

export const Container = styled.article`
  background-color: var(--color-box-base);
  border: 1px slid var(--color-line-in-white);
  border-radius: 0.8rem;
  margin-top: 2.4rem;
  overflow: hidden;
`;

export const Header = styled.header`
  align-items: center;
  display: flex;
  padding: 3.2rem 2rem;

  @media (min-width: 700px) {
    padding: 3.2rem;
  }

  img {
    border-radius: 50%;
    height: 8rem;
    width: 8rem;
  }

  div {
    margin-left: 2.4rem;

    strong {
      display: block;
      color: var(--color-text-title);
      font-family: Archivo;
      font-size: 2.4rem;
      font-weight: 700;
    }

    span {
      display: block;
      font-size: 1.6rem;
      margin-top: 0.4rem;
    }
  }
`;

export const Bio = styled.p`
  font-size: 1.6rem;
  line-height: 2.8rem;
  padding: 0px 2rem;

  @media (min-width: 700px) {
    padding: 0px 3.2rem;
  }
`;

export const Schedules = styled.div`
  display: flex;
  padding: 3.2rem;
  overflow-x: auto;
  width: 100%;
`;

export const Availability = styled.div<{ disabled: boolean }>`
  background: var(--color-box-footer);
  border: 1px solid var(--color-line-in-white);
  border-radius: 8px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  margin-right: 16px;
  min-width: 125px;
  opacity: ${props => (props.disabled ? 0.4 : 1)};
  padding: 16px;

  &:last-child {
    margin: 0px;
  }

  span {
    display: inline-block;
    font-family: Archivo;
    font-weight: 700;
    font-size: 16px;
    line-break: normal;
    line-height: 26px;
    margin-bottom: 12px;
    width: 100%;

    &:last-child {
      margin-bottom: 0px;
    }
  }
`;

export const Footer = styled.footer`
  align-items: center;
  background-color: var(--color-box-footer);
  border-top: 1px solid var(--color-line-in-white);
  display: flex;
  justify-content: space-between;
  padding: 3.2rem 2rem;
  margin-top: 3.2rem;

  @media (min-width: 700px) {
    padding: 3.2rem;

    button {
      font-size: 1.6rem;
      justify-content: center;
      width: 24.5rem;
    }
  }

  p strong {
    color: var(--color-primary);
    display: block;
    font-size: 1.6rem;

    @media (min-width: 700px) {
      display: initial;
      margin-left: 1.6rem;
    }
  }

  a {
    align-items: center;
    background-color: var(--color-secundary);
    border: 0px;
    border-radius: 0.8rem;
    color: var(--color-button-text);
    cursor: pointer;
    display: flex;
    font-family: Archivo;
    font-size: 1.4rem;
    font-weight: 700;
    justify-content: space-evenly;
    height: 5.6rem;
    text-decoration: none;
    transition: 0.2s;
    width: 20rem;

    &:hover {
      background-color: var(--color-secundary-dark);
    }

    @media (min-width: 700px) {
      img {
        margin-right: 1.6rem;
      }
    }
  }
`;
