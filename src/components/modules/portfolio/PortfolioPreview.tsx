import React from 'react';
import PortfolioHighlight from "@/modules/portfolio/PortfolioHighlight";
import styled from "@emotion/styled";

const Wrapper = styled(`div`)`
  & > div:not(:first-child) {
    padding-top: 0;
  }

  
  
  
`


function PortfolioPreview(props) {
    const {allCases} = props;
    const basePath = (projectName: string) => `/content/written/case/nl/${projectName}`; //nl will be language variable

    return (
        <Wrapper>
            {allCases.map((project, i) => {
                const even = i % 2 === 0;
                return (
                    <PortfolioHighlight left={even} content={project.card} basePath={basePath(project.title)}/>
                )
            })}
        </Wrapper>
    );
}

export default PortfolioPreview;
