import React from 'react';

import PageHeader from '../../components/PageHeader';
import './styles.css';
import TeacherItem from '../../components/TeacherItem';

const TeacherList: React.FC = () => {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">
              Matéria
              <input id="subject" name="subject" type="text" />
            </label>
          </div>

          <div className="input-block">
            <label htmlFor="week_day">
              Dia da semana
              <input type="text" id="week_day" />
            </label>
          </div>

          <div className="input-block">
            <label htmlFor="time">
              Hora
              <input type="text" id="time" />
            </label>
          </div>
        </form>
      </PageHeader>

      <main>
        <TeacherItem />
      </main>
    </div>
  );
};

export default TeacherList;
