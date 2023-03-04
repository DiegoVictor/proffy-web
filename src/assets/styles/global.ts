import styled from 'styled-components';

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
