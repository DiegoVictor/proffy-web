import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Form } from '@unform/web';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';

import Rocket from '../../assets/images/icons/rocket.svg';
import Header from '../../components/Header';
import Input from '../../components/Input';
import WarningIcon from '../../assets/images/icons/warning.svg';
import Select from '../../components/Select';
import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationErrors';
import { Container, Footer, Main, InputGroup, ScheduleItem } from './styles';

interface Schedule {
  week_day: number;
  from: string;
  to: string;
}

interface Class {
  cost?: number;
  subject?: string;
  schedules?: Schedule[];
}

function GiveClasses() {
  const formRef = useRef<FormHandles>(null);
  const [schedules, setSchedules] = useState<Schedule[]>([
    { week_day: 0, from: '', to: '' },
  ]);
  const [classItem, setClassItem] = useState<Class>({});
  const history = useHistory();

  const addNewScheduleItem = useCallback(() => {
    setSchedules([...schedules, { week_day: 0, from: '', to: '' }]);
  }, [schedules]);

  const setScheduleItemValue = useCallback(
    (scheduleIndex: number, field: string, value: string) => {
      setSchedules(state => {
        return state.map((item, index) =>
          index === scheduleIndex ? { ...item, [field]: value } : item,
        );
      });
    },
    [],
  );

  const handleSubmit = useCallback(
    async ({ subject, cost }) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          subject: Yup.string().required('Este campo é obrigatório'),
          cost: Yup.string().required('Este campo é obrigatório'),
          schedule: Yup.array().of(
            Yup.object().shape({
              week_day: Yup.string().required('Este campo é obrigatório'),
              from: Yup.string().required('Este campo é obrigatório'),
              to: Yup.string().required('Este campo é obrigatório'),
            }),
          ),
        });

        const data = {
          subject,
          cost,
          schedule: schedules,
        };
        await schema.validate(data, { abortEarly: false });

        await api.post('classes', data);

        history.push('/');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        } else {
          toast.error('Ops! Alguma coisa deu errado, tente novamente!');
        }
      }
    },
    [schedules, history],
  );

  useEffect(() => {
    (async () => {
      const response = await api.get<Class>('/classes/my-class');

      const { cost, subject } = response.data;
      const data = { cost, subject };
      if (response.data?.schedules) {
        setSchedules(response.data.schedules);
      }
      setClassItem(data);
    })();
  }, []);

  return (
    <Container>
      <Header
        options={{
          title: 'Que incrível que você quer dar aulas.',
          description:
            'O primeiro passo é preencher esse formulário de inscrição',
          page: 'Dar aulas',
          aside: {
            icon: Rocket,
            text: (
              <>
                Preparare-se!
                <br />
                vai ser o máximo.
              </>
            ),
          },
        }}
      />

      <Main>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <fieldset>
            <legend>Sobre a aula</legend>

            <InputGroup>
              <Select
                name="subject"
                label="Matéria"
                placeholder="Selecione qual você quer ensinar"
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
              <Input
                name="cost"
                type="number"
                label="Custo da sua hora por aula"
                placeholder="R$"
              />
            </InputGroup>
          </fieldset>

          <fieldset>
            <legend>
              <div>
                Horários disponíveis
                <button type="button" onClick={addNewScheduleItem}>
                  + Novo horário
                </button>
              </div>
            </legend>

            {schedules.map((_, index) => (
              <ScheduleItem key={`schedule_${index}`}>
                <Select
                  name={`schedule[${index}].weed_day`}
                  label="Dia da semana"
                  onChange={e => {
                    setScheduleItemValue(index, 'week_day', e.target.value);
                  }}
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

                <Input
                  name={`schedule[${index}].from`}
                  onChange={e => {
                    setScheduleItemValue(index, 'from', e.target.value);
                  }}
                  label="Das"
                  type="time"
                />
                <Input
                  name={`schedule[${index}].to`}
                  onChange={e => {
                    setScheduleItemValue(index, 'to', e.target.value);
                  }}
                  label="Até"
                  type="time"
                />
              </ScheduleItem>
            ))}
          </fieldset>

          <Footer>
            <p>
              <img src={WarningIcon} alt="Aviso importante" />
              <div>
                <span>Importante!</span>
                <br />
                Preencha todos os dados
              </div>
            </p>
            <button type="submit">Salvar cadastro</button>
          </Footer>
        </Form>
      </Main>
    </Container>
  );
}

export default GiveClasses;
