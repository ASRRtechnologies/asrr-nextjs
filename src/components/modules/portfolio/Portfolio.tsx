import React from 'react';
import portfolioStyles from "./portfolioStyles.module.scss"
import Section from "@/modules/shared/section/Section";
import PortfolioCard from "@/modules/portfolio/PortfolioCard";

function Portfolio(props) {
    const {allProjects, customBasePath} = props;
    console.log(props);

    return (
        <Section>
            <div className={portfolioStyles.teamGrid}>
                {allProjects.map((project) => {
                    const basePath = customBasePath(project.title);
                    return <PortfolioCard {...project} basePath={basePath}/>
                })}
            </div>
        </Section>
    );
}

export default Portfolio;
