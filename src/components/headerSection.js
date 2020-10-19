import React from 'react'
import {BrowserView, MobileView, isMobile} from "react-device-detect";
import "../css/headerSection.css";


function HeaderSection() {

    // const styles = () => {
    //     if(isMobile){
    //         return {
    //             backgroundImage: `${process.env.PUBLIC_URL}/images/mobile_home_bg.jpg` 
    //         }
    //     }else{
    //         return {
    //             backgroundImage: `${process.env.PUBLIC_URL}/images/home_bg.jpg` 
    //         }
    //     }
    // }

    // const styles = isMobile ? {background: `${process.env.PUBLIC_URL}/images/mobile_home_bg.jpg`} : {background: `${process.env.PUBLIC_URL}/images/home_bg.jpg`}

    return (
        <div className="header">
            <BrowserView viewClassName="header__browser">
                <div className="header__content">
                    <h2 className="header__content-heading">HELLO! I AM</h2>
                    <img className="header__name-image" src={`${process.env.PUBLIC_URL}/images/DINO_ime_v2.png`} alt="My name" />
                </div>
                </BrowserView>
            <MobileView className="header__phone">
                <div className="header__content">
                    <h2 className="header__content-heading">HELLO! I AM</h2>
                    <img className="header__name-image" src={`${process.env.PUBLIC_URL}/images/DINO_ime_v2.png`} alt="My name" />
                </div>
            </MobileView>
        </div>
    )
}

export default HeaderSection;
