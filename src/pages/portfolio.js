import React, {useContext, useEffect} from 'react';
import Landing from "../components/landing/Landing";
import {AnimationContext} from "../context/animations/AnimationContext";
import Layout from "../components/layout/Layout";
import PortfolioPage from "../components/portfolio/Portfolio";
import image from '../../public/assets/images/landing/camera.jpg'
import ContactPreview from "../components/contact/Preview";

function Portfolio(props) {

    const animate = useContext(AnimationContext);

    useEffect(() => {
        //Load animation only if app has loaded once
        (animate.appLoaded) ? animate.animation.secondLoad() : null;
    }, []);


    return (
        <div className="content-wrapper">
            <Landing title={"Portfolio"} text={"Portfolio that will blow your mind"} image={image}/>
            <Layout>
                <PortfolioPage/>
                <ContactPreview/>
            </Layout>
        </div>
    );
}

export default Portfolio;
