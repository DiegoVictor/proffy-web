import styled from 'styled-components';

import SideBackground from '../../assets/images/side-background.svg';

export const Container = styled.div`
  align-items: center;
  background-color: var(--color-primary);
  background-image: url(${SideBackground});
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

  h2 {
    color: var(--color-text-in-primary);
    font-size: 2.4rem;
    font-weight: 500;
    line-height: 3rem;

    @media (max-width: 799px) {
      display: none;
    }
  }
`;
