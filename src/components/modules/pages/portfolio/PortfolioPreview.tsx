import React from 'react';
import PortfolioHighlight from "@/modules/pages/portfolio/PortfolioHighlight";
import styled from "@emotion/styled";
import Title from '@/utillities/titles/Title';
import Section from '../../shared/section/Section';

const Wrapper = styled(`div`)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  //& > div:not(:first-child) {
  //  padding-top: 0;
  //}
  width: 100vw;

  & > div {
    margin-top: 0;

    :last-child {
      margin-bottom: 0;
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
                    const even = i % 2 === 1;
                    return (
                        <PortfolioHighlight reverse={even} card={project.card} info={project.info}
                                            basePath={basePath(project.title)} title={project.title}/>
                    )
                })}
            </Wrapper>
        </Section>
    );
}

export default PortfolioPreview;
