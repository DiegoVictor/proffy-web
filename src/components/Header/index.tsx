import React, { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

import LogoImg from '../../assets/images/logo.svg';
import BackIcon from '../../assets/images/icons/back.svg';
import { Container } from './styles';

interface HeaderProps {
  title: string;
  description?: string;
  pageName?: string;
}

function Header({
  title,
  description,
  pageName,
  children,
}: PropsWithChildren<HeaderProps>) {
  return (
    <Container>
      <div>
        <div>
          <Link to="/">
            <img src={BackIcon} alt="Voltar" />
          </Link>
          {pageName && <div>{pageName}</div>}
          <img src={LogoImg} alt="Proffy" />
        </div>
      </div>

      <section>
        <strong>{title}</strong>

        {description && <p>{description}</p>}

        {children}
      </section>
    </Container>
  );
}

export default Header;
