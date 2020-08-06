import React, { useState, useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import WarningIcon from '../../assets/images/icons/warning.svg';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationErrors';
import './styles.css';

interface Schedule {
  week_day: number;
  from: string;
  to: string;
}

const TeacherForm: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [schedules, setSchedules] = useState<Schedule[]>([
    { week_day: 0, from: '', to: '' },
  ]);
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
    async ({ name, avatar, whatsapp, bio, subject, cost }) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string()
            .min(4, 'Deve ter pelo menos 4 caracteres')
            .required('Este campo é obrigatório'),
          avatar: Yup.string()
            .url('Deve ser uma URL válida')
            .required('Este campo é obrigatório'),
          whatsapp: Yup.string()
            .min(9, 'Deve ter pelo menos 9 caracteres')
            .required('Este campo é obrigatório'),
          bio: Yup.string()
            .min(10, 'Deve ter pelo menos 10 caracteres')
            .required('Este campo é obrigatório'),
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
          name,
          avatar,
          whatsapp,
          bio,
          subject,
          cost,
          schedule: schedules,
        };
        await schema.validate(data, { abortEarly: false });

        await api.post('classes', data);

        toast.success('Cadastro realizado com sucesso!');
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

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição"
      />

      <main>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <fieldset>
            <legend>Seus dados</legend>

            <Input name="name" label="Nome Completo" />
            <Input name="avatar" label="Avatar" />
            <Input name="whatsapp" label="WhatsApp" />
            <Textarea name="bio" label="Bio" />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>

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
            <Input name="cost" label="Custo da sua hora por aula" />
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

            {schedules.map((schedule, index) => (
              <div key={`schedule_${index}`} className="schedule-item">
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
              </div>
            ))}
          </fieldset>

          <footer>
            <p>
              <img src={WarningIcon} alt="Aviso importante" />
              Importante!
              <br />
              Preencha todos os dados
            </p>
            <button type="submit">Salvar cadastro</button>
          </footer>
        </Form>
      </main>
    </div>
  );
};

export default TeacherForm;
