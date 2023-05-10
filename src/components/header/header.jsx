import React from "react";

export const Header = ()  => {
    return (
        <header class="header">
        <div class="header__wrapper" id="modal">
          <div class="header__wrapper-navbar">
            <nav class="navbar">
              <ul class="nav">
                <a href="index.html"><li class="nav__active">Home</li></a>
                <a href="projects.html"><li>Projects</li></a>
                <a href="about.html"><li>About us</li></a>
                <a href="contact.html"><li>Contacts</li></a>
                <div class="mobile__button mobile">
                  <a href="#modal">Make request</a>
                </div>
              </ul>
            </nav>
            <div class="logo">
              <a href="index.html"></a>
            </div>
            <div class="burger__wrapper">
            <div class="header__burger">
            </div>
            </div>
    
            <div class="button__wrapper">
              <div class="language">
                <a href="">Pl</a>
                <a href="">En</a>
              </div>
              <div class="request__button">
                <a href="#modal">Make request</a>
              </div>
            </div>
          </div>
          <div class="header__content">
            <h1>DESSIMA</h1>
            <h2>Interior design studio</h2>
            <a href="projects.html"><span class="header__content-span">&mdash;</span>View project<span class="header__content-span">&mdash;</span></a>
          </div>
    
          <div class="header__social">
            <a href="https://instagram.com/dessima_interior?igshid=YmMyMTA2M2Y=" target="_blank"></a>
            <a href="https://www.facebook.com/Dessima-Interior-106507372131775" target="_blank"></a>
            <a href="https://t.me/dessima" target="_blank"></a>
            <a href="https://wa.me/48784665862" target="_blank"></a>
          </div>
    
        </div>
      </header>
    )
}