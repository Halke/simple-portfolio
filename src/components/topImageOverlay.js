import React from 'react'
import "../css/topImageOverlay.css";

function TopImageOverlay({imageUrl}) {
    return (
        <div className="top-image-overlay__container">
            <img className="top-image-overlay__image" src={imageUrl} alt="Underneath"/>
            <div className="top-image-overlay_overlay">
                <div className="top-image-overlay__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nunc convallis luctus lacus, et pharetra nisl tempor at. 
                    Nulla tortor arcu, dictum vitae felis vitae, porta placerat dolor. 
                    Morbi consectetur est quis magna lobortis tincidunt. Nulla facilisi. 
                    Quisque iaculis justo ut arcu auctor molestie.
                </div>
            </div>
        </div>
    )
}

export default TopImageOverlay
