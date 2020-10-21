import React, {useState} from 'react'
import "../css/projectsCarousel.css";

const projects = [
    {
        name: "Project 1",
        imageUrl: `${process.env.PUBLIC_URL}/images/home_bg.jpg`,
        linkToProject: "https://github.com/Halke"
    },
    {
        name: "Project 2",
        imageUrl: `${process.env.PUBLIC_URL}/images/backend_bg.png`,
        linkToProject: "https://github.com/Halke"
    },
    {
        name: "Project 3",
        imageUrl: `${process.env.PUBLIC_URL}/images/frontend_bg.png`,
        linkToProject: "https://github.com/Halke"
    }
];

function ProjectsCarousel() {
    const [index, setIndex] = useState(0);

    const handleForward = () => {
        if(index < (projects.length - 1)){
            setIndex(index + 1);
        }else{
            setIndex(0);
        }
    }

    return (
        <div className="projects-carousel">
            <h2 className="projects-carousel__project-name">
                <a href={projects[index].linkToProject} rel="noopener noreferrer" target="_blank">
                    {projects[index].name}
                </a>
            </h2>
            <div>
                <img onClick={handleForward} src={projects[index].imageUrl} className="projects-carousel__bg-image" alt="Background"/>
                {/* <button className="projects-carousel__arrow-left projects-carousel__arrow-btn" onClick={handleBackward}>
                    <img src={`${process.env.PUBLIC_URL}/icons/left-arrow.png`} alt="Back"/>
                </button>
                <button className="projects-carousel__arrow-right projects-carousel__arrow-btn" onClick={handleForward}>
                    <img src={`${process.env.PUBLIC_URL}/icons/right-arrow.png`} alt="Forward"/>
                </button> */}
            </div>
        </div>
    )
}

export default ProjectsCarousel;
