import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../../img/logo2.png";
import Logo2 from "../../../img/logo.png";
import style from "./nav.module.css";

export const Nav = () => {
  const location = useLocation();
    return (
      <div className={`${style.header__wrapper_navbar} ${location.pathname === '/' ? style.active : ''}`}>
      <nav className={style.navbar}>
        <ul className={style.nav}>
          <Link to="/"><li>Home</li></Link>
          <Link to="/projects"><li>Projects</li></Link>
          <Link to="/about"><li>About us</li></Link>
          <Link to="/contact"><li>Contacts</li></Link>
          <div className="mobile__button mobile">
            <button>Make request</button>
          </div>
        </ul>
      </nav>
      <div className={style.logo}>
        <Link to="/"><img src={location.pathname === '/' ? Logo2 : Logo} alt="logo"/></Link>
      </div>
      <div className={style.burger__wrapper}>
      <div className={`${style.header__burger} ${location.pathname === '/' ? style.home : ''}`}>
      </div>
      </div>

      <div className={style.button__wrapper}>
        <div className={style.language}>
          <a href="">Pl</a>
          <a href="">En</a>
        </div>
        <div className={`${style.request__button} ${location.pathname === '/' ? style.home : ''}`}>
          <button>Make request</button>
        </div>
      </div>
    </div>
    );
}
