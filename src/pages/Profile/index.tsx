import { FormHandles } from '@unform/core';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Form } from '@unform/web';

import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
  Container,
  Main,
  Avatar,
  InputGroup,
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
        </Form>
      </Main>
    </Container>
  );
}

export default Profile;
