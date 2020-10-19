import React from 'react'
import "../css/descriptiveSection.css";

function DescriptiveSection({bgColor, fontColor, heading, content}) {
    
    const style = {
        backgroundColor: `${bgColor}`,
        color: `${fontColor}`
    }

    return (
        <div className="descriptive-section" style={style}>
            <h1 className="descriptive-section__heading">{heading}</h1>
            <p className="descriptive-section__content">{content}</p>
        </div>
    )
}

export default DescriptiveSection;
