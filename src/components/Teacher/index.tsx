import React, { PropsWithChildren, useCallback } from 'react';

import WhatsAppIcon from '../../assets/images/icons/whatsapp.svg';
import api from '../../services/api';
import formatValue from '../../utils/formatValue';
import { Container, Header, Bio, Footer } from './styles';

export interface TeacherProps {
  id: number;
  subject: string;
  cost: number;
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
}

function Teacher({
  teacher: { id, avatar, name, subject, bio, cost, whatsapp },
}: PropsWithChildren<{ teacher: TeacherProps }>) {
  const createConnection = useCallback(() => {
    api.post('connections', { user_id: id });
  }, [id]);

  return (
    <Container>
      <Header>
        <img src={avatar} alt={name} />
        <div>
          <strong>{name}</strong>
          <span>{subject}</span>
        </div>
      </Header>

      <Bio>{bio}</Bio>

      <Footer>
        <p>
          Preço/hora
          <strong>{formatValue(cost)}</strong>
        </p>
        <a
          onClick={createConnection}
          href={`https://wa.me/${whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          type="button"
        >
          <img src={WhatsAppIcon} alt="WhatsApp" />
          Entrar em contato
        </a>
      </Footer>
    </Container>
  );
}

export default Teacher;
