import React, { PropsWithChildren } from 'react';

import { Container } from './styles';

interface ButtonProps {
  onClick?: () => void;
  bg?: string;
  type?: 'button' | 'submit';
}

function Button({
  children,
  onClick,
  type = 'button',
  ...props
}: PropsWithChildren<ButtonProps>) {
  return (
    <Container type={type} onClick={onClick} {...props}>
      {children}
    </Container>
  );
}

export default Button;
