import React, {useState} from 'react'
import "../css/mailForm.css";

function MailForm() {
    const [email, setEmail] = useState({to: "Dino.primary@gmail.com", from: "", subject: "", content: ""});

    const handleChange = e => {
        const {name, value} = e.target;

        setEmail(prevEmail => ({
            ...prevEmail,
            [name]: value
        }))
    }

    const sendMail = (e) => {
        e.preventDefault();

        const {to, from, subject, content} = email;

        alert(`Mail je poslao: ${from} na mail ${to}.\nNaslov maila je: ${subject}\nSadrzaj maila je: ${content}`);
    };

    return (
        <div className="mail-form">
            <form onSubmit={(e) => sendMail(e)} className="mail-form__form">
                <div className="mail-form__mail-info">
                    <input
                        name="from" 
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
                    name="content" 
                    value={email.content}
                />
                <button type="submit" className="mail-form__send-mail-btn">
                    SEND
                </button>
            </form>
        </div>
    )
}

export default MailForm
