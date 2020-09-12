import React from 'react';
import './home.css';

import Portfolio from '../../components/Portfolio/portfolio.js';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useTranslation } from 'react-i18next';
import me2 from "../../assets/me2.png"


function App() {
  const {t} = useTranslation();

  return (
    
    <div className="div-body">
      <Header/>
      <div className="image-header">
      </div>
      <div className="div-about">
        <div id="about">
          
          <div className="div-aboutMe">
            <div className="div-text">
              <h2>{t('name.1')}</h2>
              <h5> {t('AboutMe.1')}</h5>
              <p> {t('AboutMeTwo.1')}</p>
            </div>
            

          </div>
          <div className="img-about">
          <img src={me2} alt="me2" />
        
          </div>
        </div>
      </div>
      
      <div className="div-yellow"></div>

      <Portfolio/>
      <Footer/>
    </div>
    );
}

export default App;
