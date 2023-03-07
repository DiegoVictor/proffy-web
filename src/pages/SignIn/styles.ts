import styled from 'styled-components';

export const Title = styled.h1`
  color: #32264d;
  font-family: Poppins;
  font-weight: 700;
  font-size: 36px;
  height: 36px;
  line-height: 36px;
  margin-bottom: 40px;
`;

export const InputGroup = styled.div`
  margin-bottom: 24px;

  div label input {
    font-family: Poppins;
    font-size: 16px;
    height: 72px;
  }

  div:first-child {
    label input {
      border-radius: 8px 8px 0px 0px;
    }
  }

  div:last-child {
    margin-top: 0px;

    label input {
      border-top: 0px;
      border-radius: 0px 0px 8px 8px;
      margin-top: 0px;
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  width: 100%;

  div {
    display: flex;
    align-items: center;
  }

  a {
    color: var(--color-text-complement);
    text-decoration: none;
  }

  & + button {
    margin-top: 40px;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 48px;
  width: 100%;

  div:last-child {
    span {
      align-items: center;
      display: flex;
      font-size: 12px;

      svg {
        margin-left: 3px;
      }
    }
  }
`;

export const Register = styled.div`
  color: var(--color-text-base);
  font-size: 16px;

  a {
    color: var(--color-primary);
    font-weight: 600;
    text-decoration: underline;
  }
`;
