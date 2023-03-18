import React, { PropsWithChildren, useCallback, useState } from 'react';

import WhatsAppIcon from '../../assets/images/icons/whatsapp.svg';
import api from '../../services/api';
import formatValue from '../../utils/formatValue';
import getWeekDayName from '../../utils/getWeekDayName';

export interface TeacherProps {
  id: number;
  subject: string;
  cost: number;
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
  schedules: {
    week_day: number;
    from: string;
    to: string;
  }[];
}

function getDayAvailabilty(days: TeacherProps['schedules']) {
  return days
    .map(({ from, to }) =>
      `${from} - ${to}`.replace(/:/gi, 'h').replace(/00/gi, ''),
    )
    .join(', ');
}

function Teacher({
  teacher: { id, avatar, name, subject, bio, cost, whatsapp, schedules },
}: PropsWithChildren<{ teacher: TeacherProps }>) {
  const createConnection = useCallback(() => {
    api.post('connections', { user_id: id });
  }, [id]);

  const [availability] = useState<Record<string, string | null>>(() => {
    const weekDays = Array.from({ length: 7 }, (_, dayOfWeek) =>
      getWeekDayName(dayOfWeek),
    );

    return weekDays.reduce<Record<string, string | null>>(
      (week, day, dayOfWeek) => {
        week[day] = null;

        const days = schedules.filter(({ week_day }) => week_day === dayOfWeek);
        if (days.length > 0) {
          week[day] = getDayAvailabilty(days);
        }

        return week;
      },
      {},
    );
  });

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
