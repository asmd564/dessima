import { useEffect } from "react";
import { Contacts } from "../../components/contacts/contacts";
import desc from "../../img/desc.png";
import desc2 from "../../img/desc2.png";
import whatto2 from "../../img/whatto2.png";
import whatto3 from "../../img/whatto3.png";
import whatto4 from "../../img/whatto4.png";
import whatto5 from "../../img/whatto5.png";
import whatto6 from "../../img/whatto6.png";
import whatto1 from "../../img/wtatto1.png";
import style from "./about.module.css";

export const About = (props) => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    return (
        <>
        <section className={style.header__content}>
            <div className={style.header__content_wrapper}>
                <div className={style.header__content_tittle}>
                    <h1>Nasze wnętrza są wygodne i przyjemne, dzięki zastosowaniu subtelnej, ciepłej gamy kolorystycznej z wykorzystaniem akcentów kolorystycznych, najczęściej w postaci dodatków</h1>
                </div>
                </div>
        </section>
        <section className={style.description}>
                <div className={style.description__wrapper}>
                    <div className={style.description__tittle}>
                        <h2>Mari Guminilovych</h2>
                        <p>Architekt wnętrz</p>
                        <p>Witam, kochani!
Mam na imię Mari i prowadzę studio projektowe Dessima Interior.
Z wykształcenia jestem Architektem wnętrz, absolwentką wydziału Wzornictwa i Architektury wnętrz na Akademii Sztuk Pięknych w Łodzi (licencjat), oraz Wydziału Architektury Wnętrz na Akademii Jana Matejki w Krakowie (magister ). Tak jak wiedza w tym zawodzie potrzebuje biegłej aktualizacji, cały czas biorę udział w targach, szkoleniach, kursach w temacie projektowania wnętrz. 
Od 2018 roku i ciagle tworze swoje portfolio, wykonując unikalne, dostosowane do odbiorcy projekty wnętrz mieszkalnych i użyteczności publicznej. 
Serdecznie zapraszam do współpracy przy projekcie Twojego wnętrza.</p>
                    </div>
                    <img src={desc} alt="" />
                </div>
                <div className={`${style.description__wrapper} ${style.desc__rev}`}>
                    <img src={desc2} alt="" />
                    <div className={style.description__tittle}>
                        <div className={style.tittle__exp}>
                            <div className={style.exp}>
                                <h2>4+</h2>
                                <p>Lat doswiadczenia</p>
                            </div>
                            <div className={style.exp}>
                                <h2>48</h2>
                                <p>Skończonych projektów</p>
                            </div>
                            <div className={style.exp}>
                                <h2>8+</h2>
                                <p>Firm partnerskich</p>
                            </div>
                            <div className={style.exp}>
                                <h2>2018</h2>
                                <p>Rok początku pracy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section><section className={style.howto__order}>

                <h2>Jak zamówić projekt wnętrza</h2>
                <p>Sześć prostych kroków by odnowic swoje wnętrze</p>
                <div className={style.howto__wrapper}>
                    <div className={style.howto__card_wrapper}>
                        <div className={style.howto_card}>
                            <img className={style.howto__img} src={whatto1} alt="" />
                            <p>Zrób zgloszenie</p>
                        </div>
                        <div className={style.howto_card}>
                            <img src={whatto2} alt="" />
                            <p>Robimy pomiary</p>
                        </div>
                        <div className={style.howto_card}>
                            <img src={whatto3} alt="" />
                            <p>Podpisujemy umowe</p>
                        </div>
                    </div>
                    <div className={style.howto__card_wrapper}>
                        <div className={style.howto_card}>
                            <img src={whatto4} alt="" />
                            <p>Tworzymy koncepcje</p>
                        </div>
                        <div className={style.howto_card}>
                            <img src={whatto5} alt="" />
                            <p>Realizujemy projekt</p>
                        </div>
                        <div className={style.howto_card}>
                            <img src={whatto6} alt="" />
                            <p>Nadzór autorski</p>
                        </div>
                    </div>
                </div>
            </section>
            <Contacts callback={props.callback}/>
        </>
    );
}