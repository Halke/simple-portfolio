import React from 'react'
import "../css/descriptiveSection.css";

function DescriptiveSection({children, bgColor}) {
    
    const style = {
        backgroundColor: `${bgColor}`
    }

    return (
        <div className="descrSection" style={style}>
            {children}
        </div>
    )
}

export default DescriptiveSection;
