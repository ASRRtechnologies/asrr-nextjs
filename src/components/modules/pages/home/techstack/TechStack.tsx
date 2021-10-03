import React from 'react'
import Section from '../../../shared/section/Section'
import Title from '../../../../utillities/titles/Title'
import styled from '@emotion/styled'
import {useTheme} from '../../../../../context/theme/ThemeContext'
import Grid from "@/modules/shared/grid/Grid";
import css from "@emotion/css";

// const Wrapper = styled(Section)`
//   background: ${props => props.theme.home.techstack};
// }`;

interface TechStack {
    darkmode: boolean,
    key: number | string
}

const Tech = styled("img")<TechStack>`
  display: block;
  width: 200px;
  height: auto;
  filter: brightness(0);

  ${props => props.darkmode && css`
    filter: invert(1);
  `}
`

function TechStack({content, basePath}) {
    const darkmode = useTheme().dark;

    const breakPoints = {
        1200: 3,
        600: 2,
        400: 1,
        0: 1,
    }

    return (
        <Section>
            <Title title={content.title} text={content.text}/>
            <Grid breakpoints={breakPoints} fade={true}>
                {content.technologies.map((data, i) => <Tech key={data.image + i} darkmode={darkmode} src={`${basePath}/${data.image}`}
                                                             alt={data.alt}/>)}
            </Grid>
        </Section>
    )
}

export default TechStack

