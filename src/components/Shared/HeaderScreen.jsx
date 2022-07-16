import React, { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import './styles/headerScreen.css'
// Images import
import logo from '../../assets/img/png/logo.png'


const HeaderScreen = () => {

  const navbar = useRef()

  const clickMenuHam = () => {
    navbar.current.classList.toggle('navbar-open')
  }

  return (
    <header className="header">
      <h1 className="header__title">
        <Link to='/'><img src={logo} alt="logo" className="logo-image__home" /></Link>
      </h1>
      <div onClick={clickMenuHam} className="header__menuham">
        <i className="fa-solid fa-bars"></i>
      </div>
      <nav ref={navbar} className="navbar">
        <ul className="navbar__list">
          <li className="navbar__items">
            <NavLink
              to='/'
              className={({ isActive }) => isActive ? 'navbar__link-active navbar__links' : 'navbar__links'}>
              <i className="fa-solid fa-house"></i>
              <p className="navbar__label">Inicio</p>
            </NavLink>
          </li>
          <li className="navbar__items">
            <NavLink
              to='/project'
              className={({ isActive }) => isActive ? 'navbar__link-active navbar__links' : 'navbar__links'}>
              <i className="fa-solid fa-u"></i>
              <p className="navbar__label">Proyecto</p>
            </NavLink>
          </li>
          <li className="navbar__items">
            <NavLink
              to='/team'
              className={({ isActive }) => isActive ? 'navbar__link-active navbar__links' : 'navbar__links'}>
              <i className="fa-solid fa-people-group"></i>
              <p className="navbar__label">Nosotros</p>
            </NavLink>
          </li>
          <li className="navbar__items">
            <NavLink
              to='/contact'
              className={({ isActive }) => isActive ? 'navbar__link-active navbar__links' : 'navbar__links'}>
              <i className="fa-solid fa-file-signature"></i>
              <p className="navbar__label">Contacto</p>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderScreen;
