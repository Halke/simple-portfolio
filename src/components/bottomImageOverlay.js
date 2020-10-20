import React from 'react'
import "../css/bottomImageOverlay.css";

function BottomImageOverlay({imageUrl}) {
    return (
        <div className="bottom-image-overlay__container">
            <img className="bottom-image-overlay__image" src={imageUrl} alt="Underneath"/>
            <div className="bottom-image-overlay_overlay">
                <div className="bottom-image-overlay__text">
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

export default BottomImageOverlay;
