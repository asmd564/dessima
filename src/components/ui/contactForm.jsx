import React from "react";

const ContactForm = (props) => {
    return(
        <div className={`modal active`}>
            <form className="modal__wrapper" method="POST">
                <button type="button" name="button" className="close" onClick={props.callback}></button>
                    <h1>MAKE REQUEST</h1>
                    <div className="modal__form">
                    <h2>Full name</h2>
                    <input type="text" required></input>
                <h2>Email</h2>
                <input type="email" required></input>
                <h2>Contact number</h2>
                <input type="tel" required></input>
                <button type="submit" name="button" >Send</button>
            </div>

          </form>
    </div>
    )
}

export default ContactForm;