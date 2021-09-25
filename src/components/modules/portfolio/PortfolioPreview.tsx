import React from 'react';
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
