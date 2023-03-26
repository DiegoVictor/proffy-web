import React, { useCallback, useState } from 'react';
import { Form } from '@unform/web';
import { toast } from 'react-toastify';

import Header from '../../components/Header';
import Teacher, { TeacherProps } from '../../components/Teacher';
import Select from '../../components/Select';
import api from '../../services/api';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container, Teachers } from './styles';

function Study() {
  const [teachers, setTeachers] = useState<TeacherProps[]>([]);
  const [count, setCount] = useState<number>();

  const handleSubmit = useCallback(async data => {
    try {
      const response = await api.get<TeacherProps[]>('classes', {
        params: data,
      });
      setTeachers(response.data);
    } catch (err) {
      toast.error('Ops! Alguma coisa deu errado, tente mais tarde!');
    }
  }, []);

  useEffect(() => {
    (async () => {
      const response = await api.get<TeacherProps[]>('/classes');
      setTeachers(response.data);
    })();
  }, []);

  return (
    <Container>
      <Header title="Estes são os proffys disponíveis" page="Estudar">
        <Form onSubmit={handleSubmit}>
          <Select
            name="subject"
            label="Matéria"
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Ciências', label: 'Ciências' },
              { value: 'Educação Física', label: 'Educação Física' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'História', label: 'História' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Português', label: 'Português' },
              { value: 'Química', label: 'Química' },
            ]}
          />

          <Select
            name="week_day"
            label="Dia da semana"
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-feira' },
              { value: '2', label: 'Terça-feira' },
              { value: '3', label: 'Quarta-feira' },
              { value: '4', label: 'Quinta-feira' },
              { value: '5', label: 'Sexta-feira' },
              { value: '6', label: 'Sabado' },
            ]}
          />

          <Input type="time" name="time" label="Hora" />

          <Button type="submit">Buscar</Button>
        </Form>
      </Header>

      {teachers.length > 0 ? (
        <Teachers>
          {teachers.map((teacher: TeacherProps) => (
            <Teacher key={teacher.id} teacher={teacher} />
          ))}
        </Teachers>
      ) : (
        <p>
          Nenhum professor encontrado
          <br /> com sua pesquisa.
        </p>
      )}
    </Container>
  );
}

export default Study;
