import React from 'react'
import "../css/descriptiveSection.css";

function DescriptiveSection({children, bgColor}) {
    return (
        <div className="descrSection">
            {children}
        </div>
    )
}

export default DescriptiveSection;
