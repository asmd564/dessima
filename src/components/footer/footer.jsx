import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer__wrapper">
        <ul>
            <Link to="/"><li>Główna</li></Link>
            <Link to="/projects"><li>Projekty</li></Link>
            <Link to="/about/style"><li>O naszym stylu</li></Link>
            <Link to="/about"><li>O naszym studio</li></Link>
            <Link to="/contact"><li>Kontakt</li></Link>
            <Link to="/contact"><li>Wyślij wiadomość</li></Link>
        </ul>
        </div>
        <h2>POZWÓL NAM DZIELIĆ SIĘ NASZĄ ESTETYKĄ</h2>
        <div className="footer__social">
        <a href="https://instagram.com/dessima_interior?igshid=YmMyMTA2M2Y=" target="_blank"></a>
        <a href="https://www.facebook.com/Dessima-Interior-106507372131775" target="_blank"></a>
        <a href="https://t.me/dessima" target="_blank"></a>
        <a href="https://wa.me/48784665862" target="_blank"></a>
        </div>
        <p>© 2022 Dessima Interior</p>
      </footer>
    );
}