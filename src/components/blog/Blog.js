import React, {useEffect, useState} from 'react'
import Card from '@/blog/Card'
import Section from '@/layout/Section'
import Title from "@/titles/Title";
import ReadMore from "@/text/ReadMore";
import Contact from "@/contact/Preview";
import {blog} from "../../data/blog";
import Fade from "react-reveal";

function Blog({preview}) {
    let [cases, setCases] = useState(blog);

    useEffect(() => {
        if (preview) setCases(blog.slice(0, 3));
    }, [preview]);

    return (
        <Section id="blog-page">
            <Title title={'blog.landing.title'} text={'blog.landing.subtitle'}/>
            <div className="blog">
                {
                    cases.map((entry, i)=>{
                        return <Fade delay={i * 300}><Card blog={entry}/></Fade>
                    })
                }
            </div>
            {preview && <ReadMore className="read-more-big" to="/blog" text="buttons.blog"/>}
            {preview ? null : <Contact className="section-contact-form"/>}

        </Section>
    )
}

export default Blog
