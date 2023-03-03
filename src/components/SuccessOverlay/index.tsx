import React, { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

import Button from '../Button';
import SuccessCheck from '../../assets/images/icons/success-check.svg';
import { Container } from './styles';

interface SuccessOverlayProps {
  subtitle: JSX.Element;
  message: JSX.Element;
  buttonLabel: string;
}

function SuccessOverlay({
  message,
  buttonLabel,
  subtitle,
}: PropsWithChildren<SuccessOverlayProps>) {
  return (
    <Container>
      <div>
        <img src={SuccessCheck} alt="Sucesso" />
        {subtitle}
        <h3>{message}</h3>
        <Link to="/signin">
          <Button>{buttonLabel}</Button>
        </Link>
      </div>
    </Container>
  );
}

export default SuccessOverlay;
