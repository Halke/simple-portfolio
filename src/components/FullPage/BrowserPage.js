import React from 'react'
import Navbar from "../navBar";
import HeaderSection from "../headerSection";
import DescriptiveSection from "../descriptiveSection";
import TopImageOverlay from "../topImageOverlay";
import BottomImageOverlay from "../bottomImageOverlay";
import "../../css/browserPage.css";

function BrowserPage() {
    return (
        <div>
            <Navbar />
            <HeaderSection id="home" />
            <div className="browser-page__content">
                <div id="about" className="browser-page__about">
                    <DescriptiveSection
                        className="browser-page__about-personal-info" 
                        heading="Personal info"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc convallis luctus lacus, et pharetra nisl tempor at. 
                                Nulla tortor arcu, dictum vitae felis vitae, porta placerat dolor. Morbi consectetur est quis magna lobortis tincidunt. 
                                Nulla facilisi. Quisque iaculis justo ut arcu auctor molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        fontColor="#a8dadc"
                    />
                    <div className="browser-page__about-profile-photo">
                        <img className="browser-page__about-profile-photo-circle" src="https://via.placeholder.com/200" alt="Avatar"/>
                    </div>
                    <DescriptiveSection
                        className="browser-page__about-my-interest" 
                        heading="What am I interested in?"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc convallis luctus lacus, et pharetra nisl tempor at. Nulla tortor arcu, dictum vitae felis vitae, porta placerat dolor. Morbi consectetur est quis magna lobortis tincidunt. Nulla facilisi. Quisque iaculis justo ut arcu auctor molestie."
                        fontColor="#f1faee"
                    />
                </div>
                <div className="browser-page__fields-of-interest">
                    {/* Overlay from top */}
                    <div>
                        <TopImageOverlay imageUrl={`${process.env.PUBLIC_URL}/images/frontend_bg.png`} />
                    </div>
                    {/* Overlay from bottom */}
                    <div>
                        <BottomImageOverlay imageUrl={`${process.env.PUBLIC_URL}/images/backend_bg.png`} />
                    </div>
                </div>
                <div className="browser-page__projects">
                    <div className="browser-page__projects-description">

                    </div>
                    <div className="browser-page__projects-carousel">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default BrowserPage
