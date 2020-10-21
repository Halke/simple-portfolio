import React from 'react'
import ProjectsCarousel from "./projectsCarousel";
import "../css/projectsSection.css";

function ProjectsSection() {
    return (
        <div className="projects-section">
            <div className="projects-section__info">
                <h2 className="projects-section__heading">Projects</h2>
                <span className="projects-section__heading-underline"></span>
                <p className="projects-section__projects-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nunc convallis luctus lacus, et pharetra nisl tempor at. 
                    Nulla tortor arcu, dictum vitae felis vitae, porta placerat dolor.
                    Morbi consectetur est quis magna lobortis tincidunt. Nulla facilisi. 
                    Quisque iaculis justo ut arcu auctor molestie.
                </p>
            </div>
            <div className="projects-section__carousel">
                <ProjectsCarousel />
            </div>
        </div>
    )
}

export default ProjectsSection
