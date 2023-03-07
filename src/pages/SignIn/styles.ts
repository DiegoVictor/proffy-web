import styled from 'styled-components';

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
