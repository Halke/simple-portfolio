import React, {useState} from 'react'
import "../css/projectsCarousel.css";

const projects = [
    {
        name: "Amazon Clone App",
        imageUrl: `${process.env.PUBLIC_URL}/projects/amazon.jpg`,
        linkToProject: "https://github.com/Halke/Amazon-Clone"
    },
    {
        name: "Simple Blog App",
        imageUrl: `${process.env.PUBLIC_URL}/projects/blog.JPG`,
        linkToProject: "https://github.com/Halke/BlogApp"
    },
    {
        name: "Secrets App",
        imageUrl: `${process.env.PUBLIC_URL}/projects/secrets.JPG`,
        linkToProject: "https://github.com/Halke/SecretsWebsite_SecurityImplementation"
    },
    {
        name: "To Do App",
        imageUrl: `${process.env.PUBLIC_URL}/projects/todo.JPG`,
        linkToProject: "https://github.com/Halke/ToDoList"
    },
    {
        name: "Webflix (Netflix clone) App",
        imageUrl: `${process.env.PUBLIC_URL}/projects/webflix.jpg`,
        linkToProject: "https://github.com/Halke/Webflix_Netflix-Clone"
    },
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
