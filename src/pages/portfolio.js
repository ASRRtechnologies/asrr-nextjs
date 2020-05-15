import React, {useContext, useEffect} from 'react';
import Landing from "../components/landing/Landing";
import {AnimationContext} from "../context/animations/AnimationContext";
import Layout from "../components/layout/Layout";
import PortfolioPage from "../components/portfolio/Portfolio";
function Portfolio(props) {

    const animate = useContext(AnimationContext);

    useEffect(() => {
        animate.animation.secondLoad();
    }, []);


    return (
        <div className="content-wrapper">
            <Landing/>
            <Layout>
                <PortfolioPage/>
            </Layout>
        </div>
    );
}

export default Portfolio;