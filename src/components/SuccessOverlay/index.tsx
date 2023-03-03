import React, { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

import Button from '../Button';
import SuccessCheck from '../../assets/images/icons/success-check.svg';
import Proffy from '../Proffy';
import { Container } from './styles';

interface SuccessOverlayProps {
  src?: string;
  subtitle: JSX.Element;
  message: JSX.Element;
  buttonLabel: string;
  show: boolean;
}

function SuccessOverlay({
  message,
  buttonLabel,
  show,
  ...props
}: PropsWithChildren<SuccessOverlayProps>) {
  if (show) {
    return (
      <Container>
        <Proffy src={SuccessCheck} {...props}>
          <h3>{message}</h3>
          <Link to="/signin">
            <Button>{buttonLabel}</Button>
          </Link>
        </Proffy>
      </Container>
    );
  }

  return null;
}

export default SuccessOverlay;
