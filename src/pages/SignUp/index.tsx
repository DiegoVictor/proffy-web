import React, { useCallback, useRef, useState } from 'react';
import { Form } from '@unform/web';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import Input from '../../components/Input';
import Button from '../../components/Button';
import { Title, InputGroup, Bottom, Subtitle } from './styles';
import getValidationErrors from '../../utils/getValidationErrors';
import api from '../../services/api';
import Proffy from '../../components/Proffy';
import BackButton from '../../components/BackButton';
import { Container, Main } from '../../assets/styles/global';

function SignUp() {
  const form = useRef<FormHandles>(null);
  const [hidePassword, setHidePassword] = useState(true);
  const [successOverlay, setSuccessOverlay] = useState(false);

  const handleSubmit = useCallback(
    async ({ email, password, name, surname }) => {
      try {
        const schema = Yup.object().shape({
          email: Yup.string()
            .email('Digite um email válido')
            .required('Email obrigatório'),
          password: Yup.string().required('Senha obrigatória'),
          name: Yup.string().required('Nome é obrigatório'),
          surname: Yup.string().required('Sobrenome é obrigatório'),
        });

        await schema.validate(
          { name, surname, email, password },
          { abortEarly: false },
        );

        await api.post('/users', {
          name,
          surname,
          email,
          password,
        });

        setSuccessOverlay(true);
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          form.current?.setErrors(errors);
        } else {
          toast.error(
            'Ocorreu um erro ao tentar cadastrar seus dados, tente novamente.',
          );
        }
      }
    },
    [form],
  );
  return (
    <Container>
      <Main>
        <div>
          <BackButton />
          <div>
            <Title>Cadastro</Title>
            <Subtitle>Preencha os dados abaixo para começar.</Subtitle>
            <Form ref={form} onSubmit={handleSubmit}>
              <InputGroup>
                <Input name="name" placeholder="Nome" />
                <Input name="surname" placeholder="Sobrenome" />
                <Input name="email" placeholder="E-mail" />
                <Input
                  name="password"
                  type={hidePassword ? 'password' : 'text'}
                  placeholder="Senha"
                  icon={
                    !hidePassword ? (
                      <AiOutlineEyeInvisible
                        size="22"
                        color="#8257E5"
                        onClick={() => {
                          setHidePassword(true);
                        }}
                      />
                    ) : (
                      <AiOutlineEye
                        size="22"
                        onClick={() => {
                          setHidePassword(false);
                        }}
                      />
                    )
                  }
                />
              </InputGroup>

              <Button
                onClick={() => {
                  if (form && form.current) {
                    form.current.submitForm();
                  }
                }}
              >
                Concluir cadastro
              </Button>
            </Form>
          </div>

          <Bottom />
        </div>
      </Main>

      <Proffy />
    </Container>
  );
}

export default SignUp;
