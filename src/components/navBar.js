import React from 'react'
import {
    BrowserView,
    MobileView
  } from "react-device-detect";


// The component that renders navbar optimized for
// mobile phones
function RenderMobileNavbar() {
    <ul>
        <li><a href="#"><img src={process.env.PUBLIC_URL + "/icons/whiteHome.png"} alt="Home option"/></a></li>
        <li><a href="#"><img src={process.env.PUBLIC_URL + "/icons/projectsWhite.png"} alt="Projects option"/></a></li>
        <li><a href="#"><img src={process.env.PUBLIC_URL + "/icons/profileWhite.png"} alt="About option"/></a></li>
    </ul>
}

// The component that renders navbar optimized for
// PCs and laptops
function RenderBrowserNavbar() {
    <ul>
        <li>HOME</li>
        <li>&#9787;</li>
        <li>PROJECTS</li>
        <li>&#9787;</li>
        <li>ABOUT</li>
    </ul>
}


function navBar() {

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

export default navBar
