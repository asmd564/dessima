import { useEffect } from 'react';
import facebook from '../../img/Facebook2.png';
import telegram from '../../img/Telegram2.png';
import instagram from '../../img/Instagram2.png';
import whatsapp from '../../img/WhatsApp2.png';

export const Contacts = (props) => {

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return (
        <div className="intouch__wrapper">
            <h2 className='strength__title'>Skontaktuj się!</h2>
            <div className="paragraph__wrapper">
                <p>Myślisz, że moglibyśmy Ci pomóc z projektem Twojej przestrzeni? Chcielibyśmy poznać Cię trochę lepiej – napisz do nas lub zadzwoń.</p>
            </div>

            <div className="contact__wrapper">
                <p>+48 784 665 862</p>
                <p>dessima.interior@gmail.com</p>
                <div className="social__wrapper">
                    <a href="https://www.facebook.com/Dessima-Interior-106507372131775"><img src={facebook} alt="facebook" /></a>
                    <a href="https://t.me/dessima"><img src={telegram} alt="telegram" /></a>
                    <a href="https://instagram.com/dessima_interior?igshid=YmMyMTA2M2Y="><img src={instagram} alt="instagram" /></a>
                    <a href="https://wa.me/48784665862"><img src={whatsapp} alt="whatsapp" /></a>
                </div>
            </div>
            <div className="contact__button">
                <button className="c__btn" onClick={props.callback}>Wyślij wiadomość</button>
            </div>
        </div>
    );
}