import React, { useCallback, useRef, useState } from 'react';
import Proffy from '../../components/Proffy';
import BackButton from '../../components/BackButton';
import { Container, Main } from '../../assets/styles/global';

function ForgotPassword() {
  return (
    <Container>
      <Main>
        <div>
          <BackButton />

          <div>
        </div>
      </Main>

      <Proffy />
    </Container>
  );
}

export default ForgotPassword;
