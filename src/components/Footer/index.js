import React from 'react';
import {
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';
  import { useTranslation } from 'react-i18next';
  import './footer.css';
  import email from "../../assets/email.gif"
  import github from "../../assets/github.png"
  import linkedin from "../../assets/linkedin.png"



function Footer() {
  const {t} = useTranslation();
  

    return (
        <footer>
          <div className="contact-text">
            <h2>{t('ProjectTitle.1')}</h2>
            <p>{t('Project.1')}</p>
            
          </div>
          <div className="contact-social">
            <div className="email">
              <img src={email} alt="iconemail" />
              <p>andressalhenriques@gmail.com</p>
            </div>
          
            <Nav className="navbar navbar-expand-lg navbarMenu">
              <NavItem>
                <NavLink target="_blank" href="https://github.com/andressalhenriques"><img src={github} alt="iconemail" /></NavLink>
              </NavItem>
              <NavItem>
                <NavLink target="_blank"  href="https://www.linkedin.com/in/andressalh/" ><img src={linkedin} alt="iconemail" /></NavLink>
              </NavItem>
            </Nav>
          </div>
        
        <div className="copyright">
          <h5>Copyright © Andressa Henriques</h5>
        </div>
      </footer> 
    );
  }
  
  export default Footer;