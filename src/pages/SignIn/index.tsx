import React, { useCallback, useRef, useState } from 'react';
import { Form } from '@unform/web';
import { MdFavorite } from 'react-icons/md';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { FormHandles } from '@unform/core';

import Input from '../../components/Input';
import { useAuth } from '../../hooks/auth';
import Proffy from '../../components/Proffy';
import { Container, Main } from '../../assets/styles/global';

function SignIn() {
  const form = useRef<FormHandles>(null);
  const [hidePassword, setHidePassword] = useState(true);
  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async ({ email, password, remember }) => {
    },
    [form, signIn],
  );

  return (
    <Container>
      <Proffy />

      <Main>
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
      </Main>
    </Container>
  );
}

export default SignIn;
