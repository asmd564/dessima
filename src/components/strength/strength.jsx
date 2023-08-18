import React, {useState} from "react";
import { Contacts } from "../contacts/contacts";
import { Link } from "react-router-dom";
import jadalnia from "../../img/jadalnia1.png";
import kuchnia from "../../img/kuchnia.png";
import lazienka from "../../img/lazienka2.png";
import lazienka6 from "../../img/lazienka6.png";
import sypialnia from "../../img/sypialnia1.png";
import hol from "../../img/hol1.png";

export const Strength = (props) => {

    return (
        <section className="strength">
            <div className="strength__wrapper">
            <div className="strength__description">
                <h4>SILNE STRONY</h4>
                <h2 className="strength__title">KAŻDY PROJEKT OPRACOWUJEMY INDYWIDUALNIE.</h2>
                <p>Jesteśmy w stanie usatysfakcjonować gust najbardziej wymagającego klienta. Unikalne i rzetelne podejście do każdego projektu, doświadczenie we współpracy z klientem, artystyczny gust i harmonia łączenia pomysłów. My dobierzemy wszystkie materiały, meble, dekoracje. A Ty będziesz mogł/mogła cieszyć się swoim idealnym miejscem.</p>
                <Link to="projects" className="str__btn">Projekty</Link>
            </div>
            <div className="strength__img">
                <img src={kuchnia} alt="image"></img>
            </div>
            </div>
    
        <div className="process__wrapper-main">
        <div className="process__wrapper">
          <div className="strength__img">
            <img src={lazienka} alt="image"></img>
          </div>
          <div className="strength__description">
            <h4>Nasz proces</h4>
            <h2 className="strength__title">Twój projekt jest Prosty.</h2>
            <p>Naszym celem jest tworzenie wnętrz, które współgrają z Twoim stylem życia. Chcemy, abyś czuł się świetnie w swojej przestrzeni. Stworzymy dla Ciebie funkcjonalnie prosty, wygodny, przyjemny i ciekawy projekt wnętrza.</p>
            <Link to="/about" className="str__btn">Nasze studio</Link>
          </div>
    
        </div>
        </div>
    
        <div className="strength__wrapper">
          <div className="strength__description">
            <h4>USŁUGA</h4>
            <h2 className="strength__title">Stwórzmy razem idealną przestrzeń</h2>
            <p>Nasze usługi są zawsze elastyczne. Dostosowujemy się do potrzeb i budżetu naszych klientów. 
Chętnie pomożemy w Twoim projekcie, to jest świetna możliwość  zaoszczędzić swój czas i pieniądze dzięki naszym usługom projektowym i rabatom z których możesz skorzystać, dzieńki współpacy z nami.</p>
            <Link to="contact" className="str__btn">Kontakt</Link>
          </div>
          <div className="strength__img">
            <img src={lazienka6} alt="image"></img>
          </div>
        </div>
    
        <div className="process__wrapper-main">
          <div className="instagram__wrapper">
           <h2>INSTAGRAM</h2>
           <p>Obserwej nas, aby pozostać w kontakcie, 
być pierwszym, który zobaczy najnowsze projekty wnętrz i ich realizację</p>
          </div>
          <div className="instagram__img">
            <a href="https://instagram.com/dessima_interior?igshid=YmMyMTA2M2Y=" className="first"><img src={jadalnia} alt="jadalnia"></img></a>
            <a href="https://instagram.com/dessima_interior?igshid=YmMyMTA2M2Y=" className="second"><img src={sypialnia} alt="sypialnia"></img></a>
            <a href="https://instagram.com/dessima_interior?igshid=YmMyMTA2M2Y=" className="third"><img src={hol} alt="hol"></img></a>
          </div>
          <div className="dots__wrapper">
            <div className="dot active"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
          <div className="subscribe__button">
            <a href="https://instagram.com/dessima_interior?igshid=YmMyMTA2M2Y=" target="_blank">Więcej zdjęć</a>
          </div>
        </div>
        <Contacts callback={props.callback}/>
    
    
      </section>
    );
}