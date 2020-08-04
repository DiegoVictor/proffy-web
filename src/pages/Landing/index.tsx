import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';
import LogoImg from '../../assets/images/logo.svg';
import LandingImg from '../../assets/images/landing.svg';

import StudyIcon from '../../assets/images/icons/study.svg';
import GiveClassesIcon from '../../assets/images/icons/give-classes.svg';
import PurpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import './styles.css';

const Landing: React.FC = () => {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={LogoImg} alt="Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <img
          src={LandingImg}
          alt="Plataforma de Estudos"
          className="hero-image"
        />

        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={StudyIcon} alt="Estudar" />
            Estudar
          </Link>

          <Link to="/give-classes" className="give-classes">
            <img src={GiveClassesIcon} alt="Dar Aulas" />
            Dar Aulas
          </Link>
        </div>

        <span className="total-connections">
          Total de 200 conexões já realizadas
          <img src={PurpleHeartIcon} alt="Coração roxo" />
        </span>
      </div>
    </div>
  );
};

export default Landing;
