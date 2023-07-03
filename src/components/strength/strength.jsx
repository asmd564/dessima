import React, {useState} from "react";
import { Contacts } from "../contacts/contacts";
import { Link } from "react-router-dom";

export const Strength = () => {

    return (
        <section class="strength">
            <div class="strength__wrapper">
            <div class="strength__description">
                <h4>STRENGTHS</h4>
                <h2>WE DESIGN EVERY PROJECT AS A ONE-OFF</h2>
                <p>We are able to satisfy the taste of the most demanding client. We take care about all the technical and bureaucratic worries. We offer the best planning options. We select all materials and order decorations. You enjoy your perfect place.</p>
                <Link to="projects" class="str__btn">Projects</Link>
            </div>
            <div class="strength__img">
                <img src="img/kuchnia.png" alt="image"></img>
            </div>
            </div>
    
        <div class="process__wrapper-main">
        <div class="process__wrapper">
          <div class="strength__img">
            <img src="img/lazienka2.png" alt="image"></img>
          </div>
          <div class="strength__description">
            <h4>Our process</h4>
            <h2>WE MAKE IT SIMPLE</h2>
            <p>We want you to feel amazing at home. In other words, our aim is to create an interior design that enhances your rooms and your lifestyle. With our interior design process we make sure that everything is easy and enjoyable for you. </p>
            <Link to="our-studio" class="str__btn">Our studio</Link>
          </div>
    
        </div>
        </div>
    
        <div class="strength__wrapper">
          <div class="strength__description">
            <h4>SERVICE</h4>
            <h2>MORE THEN JUST DESIGN</h2>
            <p>Our services are always flexible and we adapt to our clients needs and budget. Let us help you with your project and save time and money with our design services and discounts.</p>
            <Link to="contact" class="str__btn">Contact</Link>
          </div>
          <div class="strength__img">
            <img src="img/lazienka6.png" alt="image"></img>
          </div>
        </div>
    
        <div class="process__wrapper-main">
          <div class="instagram__wrapper">
           <h2>INSTAGRAM</h2>
           <p>We believe that knowledge is a gift. Each of us develops constantly and shares knowledge with the team. We help each other to find the seem the best.</p>
          </div>
          <div class="instagram__img">
            <a href="#" class="first"><img src="img/jadalnia1.png" alt="jadalnia"></img></a>
            <a href="#" class="second"><img src="img/sypialnia1.png" alt="sypialnia"></img></a>
            <a href="#" class="third"><img src="img/hol1.png" alt="hol"></img></a>
          </div>
          <div class="dots__wrapper">
            <div class="dot active"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </div>
          <div class="subscribe__button">
            <a href="https://instagram.com/dessima_interior?igshid=YmMyMTA2M2Y=" target="_blank">Find more</a>
          </div>
        </div>
        <Contacts/>
    
    
      </section>
    );
}