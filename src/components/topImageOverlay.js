import React from 'react'
import "../css/topImageOverlay.css";

function TopImageOverlay({imageUrl}) {
    return (
        <div className="container">
            <img src={imageUrl} alt="Avatar" className="image" />
            <div className="overlay">
                <div className="text">
                    Making modern Websites and Web Apps that will satisfy you users. 
                </div>
            </div>
        </div>
    )
}

export default TopImageOverlay
