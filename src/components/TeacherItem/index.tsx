import React, { useCallback } from 'react';

import WhatsAppIcon from '../../assets/images/icons/whatsapp.svg';
import api from '../../services/api';
import formatValue from '../../utils/formatValue';
import './styles.css';

export interface Teacher {
  id: number;
  subject: string;
  cost: number;
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
}

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  const createConnection = useCallback(() => {
    api.post('connections', { user_id: teacher.id });
  }, [teacher]);

  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <p>{teacher.bio}</p>

      <footer>
        <p>
          Preço/hora
          <strong>{formatValue(teacher.cost)}</strong>
        </p>
        <a
          onClick={createConnection}
          href={`https://wa.me/${teacher.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          type="button"
        >
          <img src={WhatsAppIcon} alt="WhatsApp" />
          Entrar em contato
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;
