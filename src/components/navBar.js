/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {
    BrowserView,
    MobileView
  } from "react-device-detect";
  import "../css/navbar.css";


// The component that renders navbar optimized for
// mobile phones
function RenderMobileNavbar() {
    return (
    <ul className="navbar__options-container-phone">
        <li className="navbar__option-phone"><a href="#home"><img src={process.env.PUBLIC_URL + "/icons/whiteHome.png"} alt="Home option"/></a></li>
        <li className="navbar__option-phone"><a href="#projects"><img src={process.env.PUBLIC_URL + "/icons/projectsWhite.png"} alt="Projects option"/></a></li>
        <li className="navbar__option-phone"><a href="#about"><img src={process.env.PUBLIC_URL + "/icons/profileWhite.png"} alt="About option"/></a></li>
    </ul>);
}

// The component that renders navbar optimized for
// PCs and laptops
function RenderBrowserNavbar() {
    return (
    <ul className="navbar__options-container-browser">
        <li className="navbar__option-browser"><a href="#home">HOME</a></li>
        <li>&#9883;</li>
        <li className="navbar__option-browser"><a href="#projects">PROJECTS</a></li>
        <li>&#9883;</li>
        <li className="navbar__option-browser"><a href="#about">ABOUT</a></li>
    </ul>);
}


function NavBar() {

    return (
        <div className="navbar">
            <BrowserView viewClassName="navbar__browser">
                <RenderBrowserNavbar />
            </BrowserView>
            <MobileView viewClassName="navbar__mobile-phone">
                <RenderMobileNavbar />
            </MobileView>
        </div>
    )
}

export default NavBar;
