import React from 'react'
import "../css/footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="footer__contact-info">
                <p className="footer__contact-info-heading">Contact Info</p>
                <p className="footer__mail"><img className="footer__icon" src={`${process.env.PUBLIC_URL}/icons/email.png`} alt="Email icon"/> Dino.primary@gmail.com</p>
                <p className="footer__linkedin"><img className="footer__icon" src={`${process.env.PUBLIC_URL}/icons/linkedin.png`} alt="Linkedin icon"/> https://www.linkedin.com/in/dino-halke/</p>
                <p className="footer__github"><img className="footer__icon" src={`${process.env.PUBLIC_URL}/icons/github.png`} alt="Github icon"/> https://github.com/Halke</p>
            </div>
            <img className="footer__name-image" src={`${process.env.PUBLIC_URL}/images/DINO_ime_v2.png`} alt="My name"/>
        </div>
    )
}

export default Footer
