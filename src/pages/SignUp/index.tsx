import React, { useCallback, useRef, useState } from 'react';
import { Form } from '@unform/web';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { FormHandles } from '@unform/core';

import Input from '../../components/Input';
import Button from '../../components/Button';
import { Title, InputGroup, Bottom, Subtitle } from './styles';
import Proffy from '../../components/Proffy';
import BackButton from '../../components/BackButton';
import { Container, Main } from '../../assets/styles/global';

function SignUp() {
  const form = useRef<FormHandles>(null);
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
