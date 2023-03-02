import styled from 'styled-components';

export const Container = styled.button<{
  bg?: string;
}>`
  background-color: ${props =>
    props.bg ? `#${props.bg}` : 'var(--color-button-grey)'};
  border: 0px;
  border-radius: 8px;
  color: var(--color-text-complement);
  cursor: pointer;
  height: 56px;
  transition: all 0.25s;
  width: 100%;

  &:hover {
    background-color: ${props =>
      props.bg ? `#${props.bg}` : 'var(--color-secundary)'};
    color: var(--color-title-in-primary);
  }
`;
