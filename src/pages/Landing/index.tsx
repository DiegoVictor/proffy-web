import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import LandingImg from '../../assets/images/landing.svg';
import StudyIcon from '../../assets/images/icons/study.svg';
import LogoutIcon from '../../assets/images/icons/logout.svg';
import GiveClassesIcon from '../../assets/images/icons/give-classes.svg';
import PurpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import api from '../../services/api';
import { Container, Header, Logout, Content, User } from './styles';
import Proffy from '../../components/Proffy';
import Button from '../../components/Button';
import { useAuth } from '../../hooks/auth';

function Landing() {
  const [totalConnections, setTotalConnections] = useState(0);
  const { user, signOut } = useAuth();
  const fullName = `${user?.name} ${user?.surname}`.trim();

  useEffect(() => {
    (async () => {
      const { data } = await api.get('connections');
      setTotalConnections(data.total);
    })();
  }, []);

  return (
    <Container>
      <Header>
        <div>
          <Link to="/profile">
            <User>
              {user?.avatar && <img src={user.avatar} alt={fullName} />}
              {fullName}
            </User>
          </Link>
          <Logout>
            <Button bg="774DD6" onClick={signOut}>
              <img src={LogoutIcon} alt="Sair" />
            </Button>
          </Logout>
        </div>
        <div>
          <Proffy />
          <img src={LandingImg} alt="Plataforma de Estudos" />
        </div>
      </Header>

      <Content>
        <div>
          <div>
            Seja bem-vindo.
            <br />
            <strong>O que deseja fazer?</strong>{' '}
          </div>
        </div>
        <div>
          <div>
            Total de {totalConnections} conexões
            <br /> já realizadas &nbsp;
            <img src={PurpleHeartIcon} alt="Coração roxo" />
          </div>
        </div>
        <div>
          <Link to="/study" className="study">
            <Button bg="8257E5">
              <img src={StudyIcon} alt="Estudar" />
              Estudar
            </Button>
          </Link>
        </div>
        <div>
          <Link to="/give-classes" className="give-classes">
            <Button bg="04D361">
              <img src={GiveClassesIcon} alt="Dar Aulas" />
              Dar Aulas
            </Button>
          </Link>
        </div>
      </Content>
    </Container>
  );
}

export default Landing;
