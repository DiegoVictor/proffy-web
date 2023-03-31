import { FormHandles } from '@unform/core';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Form } from '@unform/web';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationErrors';
import WarningIcon from '../../assets/images/icons/warning.svg';
import {
  Container,
  Main,
  Avatar,
  Footer,
  InputGroup,
  Placeholder,
} from './styles';
import Header from '../../components/Header';
import { useAuth } from '../../hooks/auth';

interface User {
  name: string;
  surname?: string;
  email: string;
  avatar?: string;
  whatsapp: string;
  bio?: string;
}

function Profile() {
  const formRef = useRef<FormHandles>(null);
  const {
    user: { id: userId, name: userName, surname: userSurname } = {},
    updateProfile,
  } = useAuth();
  const fullName = `${userName} ${userSurname}`.trim();

  const [user, setUser] = useState<User & { subject: string }>();

  const handleSubmit = useCallback(
    async ({ name, surname, avatar, whatsapp, bio }) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string()
            .min(4, 'Deve ter pelo menos 4 caracteres')
            .required('Este campo é obrigatório'),
          surname: Yup.string()
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
        });

        const data = { name, surname, avatar, whatsapp, bio };
        await schema.validate(data, { abortEarly: false });

        await api.put('/users', data);

        toast.success('Perfil atualizado com sucesso!');
        updateProfile({ name, surname, avatar });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        } else {
          toast.error('Ops! Alguma coisa deu errado, tente novamente!');
        }
      }
    },
    [updateProfile],
  );

  useEffect(() => {
    (async () => {
      const [
        { data: profile },
        {
          data: { subject },
        },
      ] = await Promise.all([
        api.get(`/users/${userId}`),
        api.get('/classes/my-class'),
      ]);

      setUser({
        ...profile,
        subject,
      });
    })();
  }, [userId]);

  return (
    <Container>
      <Header
        options={{
          page: 'Meu perfil',
        }}
      >
        <Avatar>
          {user?.avatar ? (
            <img src={user?.avatar} alt={fullName} />
          ) : (
            <Placeholder>
              <span>
                {user?.name.charAt(0)}
                {user?.surname?.charAt(0)}
              </span>
            </Placeholder>
          )}
          {fullName && <h2>{fullName}</h2>}
          {user?.subject && <h3>{user.subject}</h3>}
        </Avatar>
      </Header>
      <Main>
        <Form ref={formRef} initialData={user} onSubmit={handleSubmit}>
          <fieldset>
            <legend>Seus dados</legend>

            <Input name="avatar" label="Avatar URL" />

            <InputGroup>
              <Input name="name" label="Nome" />
              <Input name="surname" label="Sobrenome" />
            </InputGroup>

            <InputGroup>
              <Input name="email" label="Email" readOnly />
              <Input name="whatsapp" label="WhatsApp" />
            </InputGroup>

            <Textarea name="bio" label="Bio" />
          </fieldset>

          <Footer>
            <div>
              <img src={WarningIcon} alt="Aviso importante" />
              <div>
                <span>Importante!</span>
                <br />
                Preencha todos os dados
              </div>
            </div>
            <button type="submit">Atualizar</button>
          </Footer>
        </Form>
      </Main>
    </Container>
  );
}

export default Profile;
