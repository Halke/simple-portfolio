import React, {useState} from 'react'
import "../css/sendMail.css";

function SendMail() {

    const [showForm, setShowForm] = useState(false);

    return (
        <div className="send-mail">
            <h1 className="send-mail__heading">WANT TO COLLABORATE?</h1>
            <div className="send-mail__mail-form">
                <button className="send-mail__open-form-btn" onClick={() => setShowForm(!showForm)}>
                    SEND ME A MAIL 
                    <span className="send-mail__arrow-icon-container">
                        <img 
                            className="send-mail__arrow-icon" 
                            src={showForm === false ? 
                                `${process.env.PUBLIC_URL}/icons/down-arrow.png` 
                                : 
                                `${process.env.PUBLIC_URL}/icons/up-arrow.png`} 
                            alt="Letter icon"
                        />
                    </span>
                </button>
                {}
            </div>
        </div>
    )
}

export default SendMail;