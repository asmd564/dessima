import React from "react";

const ContactForm = (props) => {
    return(
        <div className={`modal active`}>
            <div className="modal__wrapper">
                <button type="button" name="button" className="close" onClick={props.callback}>X</button>
                    <h1>MAKE REQUEST</h1>
                    <div className="modal__form">
                    <h2>Full name</h2>
                    <input type="text" name="" value=""></input>
                <h2>Email</h2>
                <input type="text"></input>
                <h2>Contact number</h2>
                <input type="text"></input>
                <button type="button" name="button" >Send</button>
            </div>

          </div>
    </div>
    )
}

export default ContactForm;