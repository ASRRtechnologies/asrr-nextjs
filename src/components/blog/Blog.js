import React from 'react'
import Card from '@/blog/Card'
import Section from '@/layout/Section'
import Title from "@/titles/Title";
import {blog} from "../../data/blog";
import styled from "@emotion/styled";
import ReadMore from "@/text/ReadMore";

const Wrapper = styled(Section)`
        background: ${props => props.theme.layout};
`;


function Preview({preview}) {
    return (
        <Wrapper className="no-landing">
            <Title basePath="blog.landing" noSection/>
            <div className="blog">
                {blog.map((entry, i) => <Card blog={entry}/>)}
            </div>
            <div className="read-more-wrapper">
                <ReadMore className="subtitle" to="/blog" text="buttons.blog"/>
            </div>
        </Wrapper>
    )
}

export default Preview
