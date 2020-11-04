import React from 'react'
import Card from '@/blog/Card'
import Section from '@/layout/Section'
import Title from "@/titles/Title";
import {blog} from "../../data/blog";
import Fade from "react-reveal/Fade";
import styled from "@emotion/styled";
import {animationDelay} from "../../functions/helper-functions";

const Wrapper = styled(Section)`
        background: ${props => props.theme.layout};
`;


function Preview({preview}) {
    return (
        <Wrapper className="no-landing">
            <Title basePath="blog.landing" noSection/>
            <div className="blog">
                {
                    blog.map((entry, i) => {
                        return <Fade delay={animationDelay([0, 200, 400], 3, i)} bottom>
                            <Card blog={entry}/>
                        </Fade>
                    })
                }
            </div>
        </Wrapper>
    )
}

export default Preview
