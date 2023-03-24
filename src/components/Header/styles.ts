import styled from 'styled-components';

export const Container = styled.header`
  background-color: var(--color-primary);
  display: flex;
  flex-direction: column;

  @media (min-width: 700px) {
    height: 340px;
  }

  > div {
    background-color: var(--color-primary-dark);

    > div {
      align-items: center;
      color: var(--color-text-in-primary);
      display: flex;
      justify-content: space-between;
      margin: 0px auto;
      max-width: 700px;
      padding: 1.6rem 0px;
      width: 90%;

      @media (min-width: 700px) {
        max-width: 1100px;
      }

      a {
        height: 3.2rem;
        transition: opacity 0.2s;

        &:hover {
          opacity: 0.6;
        }
      }

      > img {
        height: 1.6rem;
      }
    }
  }

  section {
    margin: 3.2rem auto;
    max-width: 700px;
    position: relative;
    width: 90%;

    @media (min-width: 700px) {
      align-items: flex-start;
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: center;
      margin: 0px auto;
      max-width: 740px;
      padding-bottom: 48px;
    }

    > div {
      display: flex;
      justify-content: space-between;
      width: 100%;

      @media (max-width: 549px) {
        display: block;
      }
    }

    strong {
      color: var(--color-title-in-primary);
      font-family: Archivo;
      font-size: 3.6rem;
      font-weight: 700;
      line-height: 4.2rem;

      @media (min-width: 700px) {
        display: inline-block;
        max-width: 350px;
      }
    }

    p {
      color: var(--color-text-in-primary);
      font-size: 1.6rem;
      line-height: 2.6rem;
      max-width: 30rem;
      margin-top: 2.4rem;
    }
  }
`;

export const Aside = styled.div`
  align-items: center;
  color: var(--color-text-in-primary);
  display: flex;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;

  @media (max-width: 549px) {
    margin: 16px 0px;
  }

  span {
    display: inline-block;
    margin-left: 16px;
    min-width: 95px;
  }
`;
