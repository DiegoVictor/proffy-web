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

export const Subtitle = styled.h3`
  color: #6a6180;
  font-family: Poppins;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  margin-bottom: 40px;
  max-width: 213px;
`;

export const InputGroup = styled.div`
  margin-bottom: 24px;

  div label input {
    border: 1px solid #e6e6f0;
    border-radius: 0px;
    font-family: Poppins;
    font-size: 16px;
    height: 72px;
    margin: 0px;
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

export const Bottom = styled.div`
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
