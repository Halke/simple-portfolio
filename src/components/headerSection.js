import React from 'react'
import {BrowserView, MobileView} from "react-device-detect";
import "../css/headerSection.css";




function HeaderSection() {

    return (
        <div className="header">
            {/* This part will be rendered when user is using PC or laptop */}
            <BrowserView viewClassName="header__browser">
                <div className="header__content-browser">
                    <h1 className="header__content-heading">HELLO! I AM</h1>
                    <img className="header__name-image" src={`${process.env.PUBLIC_URL}/images/DINO_ime_v2.png`} alt="My name" />
                </div>
            </BrowserView>

            {/* This part will be rendered when user is using mobile phone */}
            <MobileView viewClassName="header__phone">
                <div className="header__content-phone">
                    <h1 className="header__content-heading">HELLO! I AM</h1>
                    <img className="header__name-image" src={`${process.env.PUBLIC_URL}/images/DINO_ime_v2.png`} alt="My name" />
                </div>
            </MobileView>
        </div>
    )
}

export default HeaderSection;
