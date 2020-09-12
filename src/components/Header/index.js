import React from 'react';
import {
    Nav,
    NavItem,
    NavLink,
    NavbarBrand,
  } from 'reactstrap';
import logo from '../../assets/logo1.png'; 

import './header.css';
import i18n from 'i18next';


/* */

function Header() {

    function handleClick(lang){
        i18n.changeLanguage(lang);
    }
    return (
        <div className="menu">
            
            <Nav sticky="top" className="navbar navbar-expand-lg navbarMenu">
                <NavbarBrand href="/"><img className="logo" src={logo} alt="Logo" /></NavbarBrand>
                <Nav className="navbar navbar-expand-lg menuLanguage">
                <NavItem>
                    <NavLink onClick={()=>handleClick('en')}>EN</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink onClick={()=>handleClick('pt')}>PT</NavLink>
                </NavItem>
                </Nav>
            </Nav>
            
        </div>
    );
  }
  
  export default Header;