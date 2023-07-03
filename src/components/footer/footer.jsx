import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
      <footer class="footer">
        <div class="footer__wrapper">
        <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/projects"><li>Projects</li></Link>
            <Link to="/about/style"><li>About our style</li></Link>
            <Link to="/about"><li>About our studio</li></Link>
            <Link to="/contact"><li>Contacts</li></Link>
            <a href=""><li>Send request</li></a>
        </ul>
        </div>
        <h2>LET US SHARE OUR AESTHETICS</h2>
        <div class="footer__social">
        <a href="https://instagram.com/dessima_interior?igshid=YmMyMTA2M2Y=" target="_blank"></a>
        <a href="https://www.facebook.com/Dessima-Interior-106507372131775" target="_blank"></a>
        <a href="https://t.me/dessima" target="_blank"></a>
        <a href="https://wa.me/48784665862" target="_blank"></a>
        </div>
        <p>© 2022 Dessima Interior</p>
      </footer>
    );
}