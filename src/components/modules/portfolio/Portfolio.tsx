import React from 'react';
import portfolioStyles from "./portfolioStyles.module.scss"
import Section from "@/modules/shared/section/Section";
import PortfolioCard from "@/modules/portfolio/PortfolioCard";
import {animationsSettings} from "../../../data/animations-settings";
import {Fade} from "react-awesome-reveal";

function Portfolio(props) {
    const {allCases, customBasePath} = props;
    return (
        <Section>
            <div className={portfolioStyles.grid}>
                {allCases.map((project, i) => {
                    const basePath = customBasePath(project.title);

                    //Set delay for each uneven card. TODO make cards on mobile just same speed
                    const animationSettings = animationsSettings({}, i)

                    return (
                        <Fade {...animationSettings}>
                            <PortfolioCard {...project} basePath={basePath} {...animationSettings}/>
                        </Fade>
                    )
                })}
            </div>
        </Section>
    );
}

export default Portfolio;
