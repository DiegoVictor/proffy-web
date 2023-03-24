import React, { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

import LogoImg from '../../assets/images/logo.svg';
import BackIcon from '../../assets/images/icons/back.svg';
import { Container, Aside } from './styles';

interface HeaderProps {
  options: {
    title: string;
    description?: string;
    page?: string;
    aside?: {
      text: React.ReactFragment;
      icon: string;
    };
  };
}

function Header({
  options: { title, description, page, aside },
  children,
}: PropsWithChildren<HeaderProps>) {
  const Component = aside && (
    <Aside>
      {aside && <img src={aside.icon} alt="Emoji" />}
      <span>{aside.text}</span>
    </Aside>
  );

  return (
    <Container>
      <div>
        <div>
          <Link to="/">
            <img src={BackIcon} alt="Voltar" />
          </Link>
          {page && <div>{page}</div>}
          <img src={LogoImg} alt="Proffy" />
        </div>
      </div>

      <section>
        {description ? (
          <>
            <strong>{title}</strong>
            <div>
              <p>{description}</p>
              {Component}
            </div>
          </>
        ) : (
          <div>
            <strong>{title}</strong>
            {Component}
          </div>
        )}

        {children}
      </section>
    </Container>
  );
}

export default Header;
