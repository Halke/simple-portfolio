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
                    The projects that you can see (change the slide by clicking on project image) are 
                    made through the phase of learning Full Stack Web Development. Some of them are pretty
                    good while some of them aren't. However, I am proud on every one of these projects because
                    I have invested a lot of my time and energy in them. Through every of these projects I have
                    learned a lot of new things, so every minute and grain of energy I had spent on them was worth it.
                </p>
            </div>
            <div className="projects-section__carousel">
                <ProjectsCarousel />
            </div>
        </div>
    )
}

export default ProjectsSection
