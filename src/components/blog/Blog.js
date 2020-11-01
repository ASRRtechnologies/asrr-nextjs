import React, {useEffect, useState} from 'react'
import Card from '@/blog/Card'
import Section from '@/layout/Section'
import Title from "@/titles/Title";
import Contact from "@/contact/Preview";
import {blog} from "../../data/blog";
import Fade from "react-reveal";
import styled from "@emotion/styled";

const Wrapper = styled(Section)`
        background: ${props => props.theme.home.portfolio};
 }`;

function Preview({preview}) {
    let [cases, setCases] = useState(blog);

    useEffect(() => {

            setCases(blog.slice(0, 3));
        }
    );

    return (
        <Wrapper>
            <div id="blog-page">
                <Title basePath="blog.landing" noSection/>
                <div className="blog">
                    {
                        cases.map((entry, i) => {
                            return <Fade delay={i * 300}><Card blog={entry}/></Fade>
                        })
                    }
                </div>
                <Contact className="section-contact-form"/>
            </div>
        </Wrapper>
    )
}

export default Preview
