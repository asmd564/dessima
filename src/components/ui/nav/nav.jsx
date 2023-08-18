import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "../../../img/logo2.png";
import Logo2 from "../../../img/logo.png";
import style from "./nav.module.css";

export const Nav = (props) => {
  const [navActive, setNavActive] = useState('');
  const [burgerActive, setBurgerActive] = useState('');
  const openMenu = () => {
    setNavActive(style.active);
    setBurgerActive(style.active);
    if (navActive === style.active) {
      setNavActive('');
      setBurgerActive('');
    }
  }
  const linkClick = () => {
    setNavActive('');
    setBurgerActive('');
  }

  const location = useLocation();
    return (
      <div className={`${style.header__wrapper_navbar} ${location.pathname === '/' ? style.active : ''}`}>
      <nav className={`${style.navbar} ${navActive} ${location.pathname === '/' ? style.home : ''}`}>
        <ul className={`${style.nav} ${location.pathname === '/' ? 'home' : ''}`}>
          <NavLink onClick={linkClick} to="/projects"><li className="nav__link">Projekty</li></NavLink>
          <NavLink onClick={linkClick} to="/about"><li className="nav__link">O nas</li></NavLink>
          <NavLink onClick={linkClick} to="/contact"><li className="nav__link">Kontakty</li></NavLink>
          <div className="mobile__button mobile">
            <button className={`${style.mobile__btn} ${location.pathname === '/' ? style.mobile__btn__home : ''}`} onClick={props.callback}>Wyślij zapytanie</button>
          </div>
        </ul>
      </nav>
      <div className={style.logo}>
        <Link onClick={linkClick} to="/"><img src={location.pathname === '/' ? Logo2 : Logo} alt="logo"/></Link>
      </div>
      <div className={style.burger__wrapper}>
      <div onClick={openMenu} className={`${style.header__burger} ${burgerActive} ${location.pathname === '/' ? style.home : ''}`}>
      </div>
      </div>

      <div className={style.button__wrapper}>
        <div className={style.language}>
          <a href="">Pl</a>
          <a href="">En</a>
        </div>
        <div className={`${style.request__button} ${location.pathname === '/' ? style.home : ''}`}>
          <button onClick={props.callback}>Wyślij zapytanie</button>
        </div>
      </div>
    </div>
    );
}
