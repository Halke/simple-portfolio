import React from 'react'
import "../css/sendMail.css";

function SendMail() {
    return (
        <div className="send-mail">
            <h1>WANT TO COLLABORATE?</h1>
            <button className="send-mail__open-form-btn">
                SEND ME A MAIL <span><img className="send-mail__email-icon" src={`${process.env.PUBLIC_URL}/icons/email.png`} alt="Letter icon"/></span>
            </button>
        </div>
    )
}

export default SendMail;