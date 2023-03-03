import React from 'react';

import Logo from '../../assets/images/logo.svg';
import { Container } from './styles';

function Proffy() {
  return (
    <Container>
      <div>
        <img src={Logo} alt="Proffy" />

        <h2>
          Sua plataforma de
          <br />
          estudos online.
        </h2>
      </div>
    </Container>
  );
}

export default Proffy;
