import React, { useCallback, useRef, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';
import api from '../../services/api';
import Proffy from '../../components/Proffy';
import BackButton from '../../components/BackButton';
import SuccessOverlay from '../../components/SuccessOverlay';
import { Container, Main } from '../../assets/styles/global';

function ForgotPassword() {
  const form = useRef<FormHandles>(null);
  const [successOverlay, setSuccessOverlay] = useState(false);

  const handleSubmit = useCallback(async ({ email }) => {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Digite um email válido')
          .required('Email obrigatório'),
      });

      await schema.validate({ email }, { abortEarly: false });

      await api.post('/users/forgot_password', {
        email,
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
  }, []);

  if (successOverlay) {
    return (
      <SuccessOverlay
        subtitle={<h1>Redefinição enviada!</h1>}
        message={
          <>
            Boa, agora é só checar o e-mail que foi enviado para você
            <br />
            redefinir sua senha e aproveitar os estudos.
          </>
        }
        buttonLabel="Voltar ao login"
      />
    );
  }
  return (
    <Container>
      <Main>
        <div>
          <BackButton />

          <div>
            <Title>
              Eita, esqueceu
              <br /> sua senha?
            </Title>
            <Subtitle>Não esquenta, vamos dar um jeito nisso.</Subtitle>
            <Form ref={form} onSubmit={handleSubmit}>
              <Input name="email" placeholder="E-mail" />
            </Form>
            <Button
              onClick={() => {
                if (form && form.current) {
                  form.current.submitForm();
                }
              }}
            >
              Enviar
            </Button>
          </div>
        </div>
      </Main>

      <Proffy />
    </Container>
  );
}

export default ForgotPassword;
