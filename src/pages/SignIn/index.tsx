import React, { useCallback, useRef, useState } from 'react';
import { Form } from '@unform/web';
import { MdFavorite } from 'react-icons/md';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Checkbox from '../../components/Checkbox';
import { Title, InputGroup, Actions, Footer, Register } from './styles';
import getValidationErrors from '../../utils/getValidationErrors';
import { useAuth } from '../../hooks/auth';
import Proffy from '../../components/Proffy';
import { Container, Panel } from '../../assets/styles/global';

function SignIn() {
  const form = useRef<FormHandles>(null);
  const [hidePassword, setHidePassword] = useState(true);
  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async ({ email, password, remember }) => {
      try {
        const schema = Yup.object().shape({
          email: Yup.string()
            .email('Digite um email válido')
            .required('Email obrigatório'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate({ email, password }, { abortEarly: false });

        await signIn(email, password, remember);
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          form.current?.setErrors(errors);
        } else {
          toast.error(
            'Ocorreu um erro ao tentar fazer login, cheque suas credenciais.',
          );
        }
      }
    },
    [form, signIn],
  );

  return (
    <Container>
      <Proffy />

      <Panel>
        <div>
          <div />

          <div>
            <Title>Fazer login</Title>
            <Form ref={form} onSubmit={handleSubmit}>
              <InputGroup>
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

              <Actions>
                <div>
                  <Checkbox name="remember" value="yes" />
                  Lembrar-me
                </div>
                <div>
                  <Link to="/forgot">Esqueci minha senha</Link>
                </div>
              </Actions>

              <Button
                onClick={() => {
                  if (form && form.current) {
                    form.current.submitForm();
                  }
                }}
              >
                Entrar
              </Button>
            </Form>
          </div>

          <Footer>
            <Register>
              Não tem conta?
              <br />
              <Link to="/signup">Cadastre-se</Link>
            </Register>
            <div>
              <span>
                É de graça
                <MdFavorite color="#8257E577" size="16" />
              </span>
            </div>
          </Footer>
        </div>
      </Panel>
    </Container>
  );
}

export default SignIn;
