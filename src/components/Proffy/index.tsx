import React, { PropsWithChildren } from 'react';

import Logo from '../../assets/images/logo.svg';
import { Container } from './styles';

interface ProffyProps {
  src?: string;
  subtitle?: boolean | JSX.Element;
  useDefault?: boolean;
}

function Proffy({
  src,
  subtitle = false,
  useDefault = true,
  children,
}: PropsWithChildren<ProffyProps>) {
  return (
    <Container>
      <div>
        <img src={src ?? Logo} alt="Proffy" />

        {subtitle ||
          (useDefault && (
            <h2>
              Sua plataforma de
              <br />
              estudos online.
            </h2>
          ))}

        {children}
      </div>
    </Container>
  );
}

export default Proffy;
