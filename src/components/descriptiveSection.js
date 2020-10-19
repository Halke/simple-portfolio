import React from 'react'
import "../css/descriptiveSection.css";

function DescriptiveSection({fontColor, heading, content}) {
    
    let style = {
        color: `${fontColor}`
    }

    if(heading === 'Personal info'){
        style.textAlign = 'right';
    }

    return (
        <div className="descriptive-section" style={style}>
            <h2 className="descriptive-section__heading">{heading}</h2>
            <span className="descriptive-section__underline"></span>
            <p className="descriptive-section__content">{content}</p>
        </div>
    )
}

export default DescriptiveSection;
