import styled from 'styled-components';

export const Container = styled.div`
  display: inline-block;
  height: 24px;
  position: relative;
`;

export const Input = styled.input`
  height: 24px;
  opacity: 0;
  position: absolute;
  top: 0px;
  width: 24px;
  z-index: 2;

  &:checked + label {
    background-color: var(--color-secundary);
    border: 2px solid var(--color-secundary);
  }
`;

export const Label = styled.label`
  background: #fafafc;
  border: 1px solid #e6e6f0;
  box-sizing: border-box;
  border-radius: 8px;
  display: inline-block;
  height: 24px;
  margin-right: 10px;
  width: 24px;
`;

export const Icon = styled.div`
  align-items: center;
  display: flex;
  height: 24px;
  justify-content: center;
  position: absolute;
  top: 0px;
  width: 24px;
  z-index: 1;
`;
