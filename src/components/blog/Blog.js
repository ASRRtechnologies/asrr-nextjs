import React, {useEffect} from 'react'
import Card from '@/blog/Card'
import Section from '@/layout/Section'
import Title from "@/text/Title";
import ReadMore from "@/text/ReadMore";
import Contact from "@/contact/Preview";
import {portfolio} from "../../data/portfolio";

function Blog({preview}) {

    // useEffect(() => {
    //     if (preview) setCases(portfolio.slice(0, 3));
    //     else setCases(portfolio);
    // }, [preview]);

    return (
        <Section id="blog-page">
			<Title title={'portfolio.title.header'} text={'portfolio.preview.title.text'}/>
			<div className="blog">
                <Card/>
                <Card/>
                <Card/>
            </div>
            {preview && <ReadMore className="read-more-big" to="/portfolio" text="buttons.blog"/>}
            {preview ? null : <Contact className="section-contact-form"/>}
        </Section>
    )
}

export default Blog
