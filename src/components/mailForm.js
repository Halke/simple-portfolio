import React, {useState} from 'react'
import "../css/mailForm.css";

function MailForm() {
    const [email, setEmail] = useState({mail: "", subject: "", content: ""});

    const handleChange = e => {
        const {name, value} = e.target;

        setEmail(prevEmail => ({
            ...prevEmail,
            [name]: value
        }))
    }

    const sendMail = () => {

    };

    return (
        <div className="mail-form">
            <form className="mail-form__form">
                <div className="mail-form__mail-info">
                    <input
                        name="mail" 
                        onChange={handleChange} 
                        value={email.mail} 
                        type="email" 
                        placeholder="From" 
                        required
                    />
                    <input 
                        name="subject"
                        onChange={handleChange} 
                        type="text" value={email.subject} 
                        placeholder="Subject" 
                        required
                    />
                </div>
                <textarea 
                    onChange={handleChange} 
                    className="mail-form__mail-content" 
                    placeholder="Type here..." 
                    name="conten" 
                    value={email.content}
                />
                <button className="mail-form__send-mail-btn" onClick={sendMail} >
                    SEND
                </button>
            </form>
        </div>
    )
}

export default MailForm
