import React from 'react'
import "../css/bottomImageOverlay.css";

function BottomImageOverlay({imageUrl}) {
    return (
        <div className="bottom-overlay__container">
            <img src={imageUrl} alt="Avatar" className="bottom-overlay__image" />
            <div className="bottom-overlay__overlay">
                <div className="text">
                    Creating backend in accordance with recent programming standards and practices.
                    This will allow anyone with understanding of backend technologies to updated 
                    existing backend easily.
                </div>
            </div>
        </div>
    )
}

export default BottomImageOverlay;
