import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import LogoImg from '../../assets/images/logo.svg';
import LandingImg from '../../assets/images/landing.svg';
import StudyIcon from '../../assets/images/icons/study.svg';
import GiveClassesIcon from '../../assets/images/icons/give-classes.svg';
import PurpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import api from '../../services/api';
import { Container, Header, Content } from './styles';

function Landing() {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    (async () => {
      const { data } = await api.get('connections');
      setTotalConnections(data.total);
    })();
  }, []);

  return (
    <Container>
      <Header>
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
