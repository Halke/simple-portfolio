import React from 'react'
import "../css/skillsSection.css"

function SkillsSection() {

    const programmingSkills = ["javascript", "react", "express", "nodejs", "sql", "nosql"];
    const skillLevels = [80, 75, 70, 70, 85, 65];
    const otherSkills = [
        "RESTful APIs", 
        "Responsive Web Design", 
        "Best Coding Practices", 
        "Object Oriented Programming", 
        "Algorithms & Data Structures"
    ];

    return (
        <div className="skills-section">
            <div className="skills-section__programming-skills skills-section__subsection">
                {programmingSkills.map((skill, index) => {
                    return (
                        <div 
                            key={index} 
                            className={`${skill} skills-section__skill-with-bg`} 
                            style={{backgroundImage: `url("/images/${skill}.png")`}}
                        >
                            <h2 className="skills-section__skill-level">{skillLevels[index]}%</h2>
                        </div>
                    );
                })}
            </div>
            <div className="skills-section__other-skills skills-section__subsection">
                {otherSkills.map((skill, index) => {
                    return (
                        <div 
                            key={index} 
                            className="skills-section__skill-without-bg"
                        >
                            <h2 className="skills-section__skill-name">{skill}</h2>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default SkillsSection
