import React, { PropsWithChildren } from 'react';

import { Container } from './styles';

interface ButtonProps {
  onClick?: () => void;
  bg?: string;
}

function Button({
  children,
  onClick,
  ...props
}: PropsWithChildren<ButtonProps>) {
  return (
    <Container type="button" onClick={onClick} {...props}>
      {children}
    </Container>
  );
}

export default Button;
