import React from 'react'
import Card from '@/blog/Card'
import Section from '@/layout/Section'
import Title from "@/titles/Title";
import {blog} from "../../data/blog";
import Fade from "react-reveal/Fade";
import styled from "@emotion/styled";

const Wrapper = styled(Section)`
        background: ${props => props.theme.layout};
`;

const every_nth = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1);
console.log(every_nth([1, 2, 3, 4, 5, 6], 1));

function Preview({preview}) {
    return (
        <Wrapper className="no-landing">
            <Title basePath="blog.landing" noSection/>
            <div className="blog">
                {
                    blog.map((entry, i) => {
                        return <Fade bottom delay={i * 300}><Card blog={entry}/></Fade>
                    })
                }
            </div>
        </Wrapper>
    )
}

export default Preview
