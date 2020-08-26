import React from 'react';

import { Link } from 'react-router-dom'

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg'
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

import './styles.css';


function Landing(){
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy"/>
                    <h2>A plataforma de estudos online para todos.</h2>
                </div>
                <img src={landingImg} alt="Plataforma para estudos" className="hero-image"/>
                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="Estudar"/>
                        Estudas
                    </Link>

                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClassesIcon} alt="Dar aula"/>
                        Dar aula
                    </Link>
                </div>
                <span className="total-connections">
                    Total de 200 conexoes ja realizadas <img src={purpleHeartIcon} alt="Coracao roxo"/>
                </span>
            </div>
        </div>
    )
}

export default Landing;