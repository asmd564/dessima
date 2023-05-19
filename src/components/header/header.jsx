import { useState } from "react";
import ContactForm from "../ui/contactForm";

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
        <div className="header__wrapper" id="modal">
          <div className="header__wrapper-navbar">
            <nav className={`navbar ${active}`}>
              <ul className="nav">
                <a href="index.html"><li className="nav__active">Home</li></a>
                <a href="projects.html"><li>Projects</li></a>
                <a href="about.html"><li>About us</li></a>
                <a href="contact.html"><li>Contacts</li></a>
                <div className="mobile__button mobile">
                  <button onClick={openModal}>Make request</button>
                </div>
              </ul>
            </nav>
            <div className="logo">
              <a href="index.html"></a>
            </div>
            <div className="burger__wrapper">
              <div className={`header__burger ${active}`} onClick={open}>
            </div>
            </div>
    
            <div className="button__wrapper">
              <div className="language">
                <a href="">Pl</a>
                <a href="">En</a>
              </div>
              <div className="request__button">
                <a href="#modal" onClick={openModal}>Make request</a>
              </div>
            </div>
          </div>
          <div className="header__content">
            <h1>DESSIMA</h1>
            <h2>Interior design studio</h2>
            <a href="projects.html"><span className="header__content-span">&mdash;</span>View project<span className="header__content-span">&mdash;</span></a>
          </div>
    
          <div className="header__social">
            <a href="https://instagram.com/dessima_interior?igshid=YmMyMTA2M2Y=" target="_blank"></a>
            <a href="https://www.facebook.com/Dessima-Interior-106507372131775" target="_blank"></a>
            <a href="https://t.me/dessima" target="_blank"></a>
            <a href="https://wa.me/48784665862" target="_blank"></a>
          </div>
    
        </div>
      {visible &&(
        <ContactForm callback={closeModal}/>
      )}
      </header>
    );
}
