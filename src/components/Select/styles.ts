import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  &:focus-within::after {
    bottom: 0px;
    background-color: var(--color-primary-light);
    content: '';
    height: 2px;
    left: 1.6rem;
    position: absolute;
    right: 1.6rem;
    width: calc(100% - 3.2rem);
  }

  label {
    font-size: 1.4rem;

    & + span {
      color: var(--color-form-error);
    }
  }

  select,
  option {
    background-color: var(--color-input-background);
    border: 1px solid var(--color-line-in-white);
    border-radius: 0.8rem;
    color: var(--color-text-base);
    font-family: Archivo;
    font-size: 1.6rem;
    height: 5.6rem;
    margin-top: 0.8rem;
    outline: 0px;
    padding: 0px 1.6rem;
    width: 100%;
  }
`;
