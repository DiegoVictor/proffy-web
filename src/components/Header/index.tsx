import React, { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

import LogoImg from '../../assets/images/logo.svg';
import BackIcon from '../../assets/images/icons/back.svg';
import { Container, Aside } from './styles';

interface HeaderProps {
  options: {
    title?: string;
    description?: string;
    page?: string;
    aside?: {
      text: React.ReactFragment;
      icon: string;
    };
  };
}

function Component({
  description,
  title,
  children,
}: PropsWithChildren<{
  title?: string;
  description?: string;
}>) {
  if (description) {
    return (
      <>
        {title && <strong>{title}</strong>}
        <div>
          <p>{description}</p>
          {children}
        </div>
      </>
    );
  }

  if (children || title) {
    return (
      <div>
        {title && <strong>{title}</strong>}
        {children}
      </div>
    );
  }

  return null;
}

function Header({
  options: { title, description, page, aside },
  children,
}: PropsWithChildren<HeaderProps>) {
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
        <Component title={title} description={description}>
          {aside && (
            <Aside>
              {aside && <img src={aside.icon} alt="Emoji" />}
              <span>{aside.text}</span>
            </Aside>
        </Component>
          )}

        {children}
      </section>
    </Container>
  );
}

export default Header;
