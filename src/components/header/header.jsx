import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import ContactForm from "../ui/contactForm";
import instagram from "../../img/Instagram.png";
import facebook from "../../img/facebook.png";
import whatsapp from "../../img/whatsup.png";
import telegram from "../../img/telegram.png";

export const Header = ()  => {
    const [visible, setVisible] = useState(false);
    const [active, setActive] = useState('');

    const open = () => {
      if(active === '' || active === null) {
        setActive('active');
      } else if(active === 'active') {
        setActive('');
      } 
    };

    const openModal = () => {
      setVisible(true);
    };

    const closeModal = () => {
      setVisible(false);
    };

    return (
        <header className="header">
        <div className="header__wrapper">
          <div className="header__content">
            <h1>DESSIMA</h1>
            <h2>Interior design studio</h2>
            <Link to="/projects"><span className="header__content-span">&mdash;</span>View project<span className="header__content-span">&mdash;</span></Link>
          </div>
      </div>
          <div className="header__social">
            <a href="https://instagram.com/dessima_interior?igshid=YmMyMTA2M2Y=" target="_blank"><img src={instagram} alt="instagram"></img></a>
            <a href="https://www.facebook.com/Dessima-Interior-106507372131775" target="_blank"><img src={facebook} alt="facebook"></img></a>
            <a href="https://t.me/dessima" target="_blank"><img src={telegram} alt="telegram"></img></a>
            <a href="https://wa.me/48784665862" target="_blank"><img src={whatsapp} alt="whatsapp"></img></a>
          </div>
      </header>
    );
}
