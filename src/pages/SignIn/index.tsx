import React, { useCallback, useRef, useState } from 'react';
import { MdFavorite } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Footer, Register } from './styles';
import Proffy from '../../components/Proffy';
import { Container, Main } from '../../assets/styles/global';

function SignIn() {
  return (
    <Container>
      <Proffy />

      <Main>
        <div>
          <div />

          <div>
          <Footer>
            <Register>
              Não tem conta?
              <br />
              <Link to="/signup">Cadastre-se</Link>
            </Register>
            <div>
              <span>
                É de graça
                <MdFavorite color="#8257E577" size="16" />
              </span>
            </div>
          </Footer>
        </div>
      </Main>
    </Container>
  );
}

export default SignIn;
