import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import LandingImg from '../../assets/images/landing.svg';
import StudyIcon from '../../assets/images/icons/study.svg';
import LogoutIcon from '../../assets/images/icons/logout.svg';
import GiveClassesIcon from '../../assets/images/icons/give-classes.svg';
import PurpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import api from '../../services/api';
import { Container, Header, Logout, Content, User } from './styles';
import Button from '../../components/Button';
import { useAuth } from '../../hooks/auth';

function Landing() {
  const [totalConnections, setTotalConnections] = useState(0);
  const { user, signOut } = useAuth();

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
          <User>
            {user?.avatar && <img src={user.avatar} alt={user?.name} />}
            {user?.name}
          </User>
          <Logout>
            <Button bg="774DD6" onClick={signOut}>
              <img src={LogoutIcon} alt="Sair" />
            </Button>
          </Logout>
        </div>
        </div>
      </Header>

      <Content>
          <Link to="/study" className="study">
            <img src={StudyIcon} alt="Estudar" />
            Estudar
          </Link>

          <Link to="/give-classes" className="give-classes">
            <img src={GiveClassesIcon} alt="Dar Aulas" />
            Dar Aulas
          </Link>
        </div>
      </Content>
    </Container>
  );
}

export default Landing;
