import React, {useEffect, useState} from 'react'
import Card from '@/blog/Card'
import Section from '@/layout/Section'
import Title from "@/titles/Title";
import ReadMore from "@/text/ReadMore";
import {blog} from "../../data/blog";
import styled from "@emotion/styled";

const Wrapper = styled(Section)`
        background: ${props => props.theme.home.blog};
 }`;

function Preview({preview}) {
    let [blogs, setBlogs] = useState(blog);
    useEffect(() => setBlogs(blog.slice(0, 3)), []);

    return (
        <Wrapper>
            <Title basePath="blog.landing" noSection/>
            <div className="blog">
                {blogs.map((entry, i) => <Card blog={entry}/>)}
            </div>
            <div className="read-more-wrapper">
                <ReadMore className="subheader" to="/blog" text="buttons.blog"/>
            </div>
        </Wrapper>
    )
}

export default Preview
