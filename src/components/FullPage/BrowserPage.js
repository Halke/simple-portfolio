import React from 'react'
import Navbar from "../navBar";
import HeaderSection from "../headerSection";
import DescriptiveSection from "../descriptiveSection";
import TopImageOverlay from "../topImageOverlay";
import BottomImageOverlay from "../bottomImageOverlay";
import ProjectsSection from "../projectsSection";
import SkillsSection from "../skillsSection";
import SendMail from "../sendMail";
import Footer from "../footer";
import "../../css/browserPage.css";

function BrowserPage() {
    return (
        <div id="home">
            <Navbar />
            <HeaderSection />
            <div className="browser-page__content">
                <div id="about" className="browser-page__about">
                    <DescriptiveSection
                        className="browser-page__about-personal-info" 
                        heading="Personal info"
                        content="My name is Dino Halilovic and I am 21 year old. I am the student of Software Engineering at the University of Zenica.
                                My love for programming comes from High School when my friend introduced me few articles about programming in Python 
                                and whole story begins there. Today, after 6 years of coding I can still feel the same love as it was in the beginning.
                                I am hardworking and passionate programmer which will dedicate whole his work and free time to the task that has to be 
                                done."
                        fontColor="#a8dadc"
                    />
                    <div className="browser-page__about-profile-photo">
                        <img className="browser-page__about-profile-photo-circle" src={`${process.env.PUBLIC_URL}/images/ProfileImg.jpg`} alt="Avatar"/>
                    </div>
                    <DescriptiveSection
                        className="browser-page__about-my-interest" 
                        heading="What am I interested in?"
                        content="I'm interested in Web Development. I am tending to become the programmer which can accomplish any frontend or backend
                                task. Below is the section where the most of my skills, which are important for a Web Development, are listed and the list
                                isn't final. It can be changed, easily. I am eager to learn and spread my knowledge. Aside from Web Development, I am very interested
                                in Cyber Security and also in Machine Learning. But, that's the topic for different occasion."
                        fontColor="#f1faee"
                    />
                </div>
                <div className="browser-page__fields-of-interest">
                    {/* Overlay from top */}
                    <div>
                        <TopImageOverlay imageUrl={`${process.env.PUBLIC_URL}/images/frontend_bg.jpg`} />
                    </div>
                    {/* Overlay from bottom */}
                    <div>
                        <BottomImageOverlay imageUrl={`${process.env.PUBLIC_URL}/images/backend_bg.jpg`} />
                    </div>
                </div>
                <div id="projects" className="browser-page__projects">
                    <ProjectsSection />
                    <h1 className="browser-page__skills-heading">My Skills</h1>
                </div>
            </div>
            <div className="browser-page__skills">
                <SkillsSection />
            </div>
            <div className="browser-page__send-mail">
                <SendMail />
            </div>
            <Footer />
        </div>
    )
}

export default BrowserPage
