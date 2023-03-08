import React, { useCallback, useRef, useState } from 'react';
import { Title, Subtitle } from './styles';
import Proffy from '../../components/Proffy';
import BackButton from '../../components/BackButton';
import SuccessOverlay from '../../components/SuccessOverlay';
import { Container, Main } from '../../assets/styles/global';

function ForgotPassword() {
  const [successOverlay, setSuccessOverlay] = useState(false);

  if (successOverlay) {
    return (
      <SuccessOverlay
        subtitle={<h1>Redefinição enviada!</h1>}
        message={
          <>
            Boa, agora é só checar o e-mail que foi enviado para você
            <br />
            redefinir sua senha e aproveitar os estudos.
          </>
        }
        buttonLabel="Voltar ao login"
      />
    );
  }
  return (
    <Container>
      <Main>
        <div>
          <BackButton />

          <div>
            <Title>
              Eita, esqueceu
              <br /> sua senha?
            </Title>
            <Subtitle>Não esquenta, vamos dar um jeito nisso.</Subtitle>
        </div>
      </Main>

      <Proffy />
    </Container>
  );
}

export default ForgotPassword;
