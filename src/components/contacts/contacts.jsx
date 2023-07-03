import facebook from '../../img/Facebook2.png';
import telegram from '../../img/Telegram2.png';
import instagram from '../../img/Instagram2.png';
import whatsapp from '../../img/WhatsApp2.png';

export const Contacts = (props) => {
    return (
        <div class="intouch__wrapper">
            <h2>Get in touch!</h2>
            <div class="paragraph__wrapper">
                <p>Think we could help you with your project or space? We’d love to get to know you a little better – drop us a line or give us a call.</p>
            </div>

            <div class="contact__wrapper">
                <p>+48 784 665 862</p>
                <p>dessima.interior@gmail.com</p>
                <div class="social__wrapper">
                    <a href=""><img src={facebook} alt="facebook" /></a>
                    <a href=""><img src={telegram} alt="telegram" /></a>
                    <a href=""><img src={instagram} alt="instagram" /></a>
                    <a href=""><img src={whatsapp} alt="whatsapp" /></a>
                </div>
            </div>
            <div class="contact__button">
                <button class="c__btn" onClick={props.callback}>Send request</button>
            </div>
        </div>
    );
}