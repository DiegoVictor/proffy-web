import React from 'react';
import { Link } from 'react-router-dom';

import BackIcon from '../../assets/images/icons/back-purple.svg';
import { Container } from './styles';

function BackButton() {
  return (
    <Container>
      <Link to="/signin">
        <img src={BackIcon} alt="Voltar" />
      </Link>
    </Container>
  );
}

export default BackButton;
