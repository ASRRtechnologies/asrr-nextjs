import React from 'react';
import portfolioStyles from "./portfolioStyles.module.scss"
import Section from "@/modules/shared/section/Section";
import {Fade} from "react-awesome-reveal";
import PortfolioHighlight from "@/modules/portfolio/PortfolioHighlight";

function Portfolio(props) {
    const {allCases, customBasePath} = props;
    return (
        <>
            <PortfolioHighlight left={false}/>
            <PortfolioHighlight left={true}/>
        </>
    );
}

export default Portfolio;
