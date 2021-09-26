import React from 'react';
import PortfolioHighlight from "@/modules/portfolio/PortfolioHighlight";
import styled from "@emotion/styled";
import Title from '@/utillities/titles/Title';
import Section from '../shared/section/Section';

const Wrapper = styled(`div`)`
  //& > div:not(:first-child) {
  //  padding-top: 0;
  //}
  width: 100vw;
  
  & > div{
    padding-top: 0;
    :last-child{
      padding-bottom: 0;
    }
  }

`


function PortfolioPreview(props) {
    const {allCases, content} = props;
    const basePath = (projectName: string) => `/content/written/case/nl/${projectName}`; //nl will be language variable
    const filteredCases = allCases.filter((proj) => proj.info.preview); //Return all cases where preview is true

    return (
        <Section>
            <Title title={content.title} text={content.text}/>
            <Wrapper>
                {filteredCases.map((project, i) => {
                    const even = i % 2 === 0;
                    return (
                        <PortfolioHighlight left={even} content={project.card} basePath={basePath(project.title)}/>
                    )
                })}
            </Wrapper>
        </Section>
    );
}

export default PortfolioPreview;
