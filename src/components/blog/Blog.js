import React from 'react'
import Card from '@/blog/Card'
import Section from '@/layout/Section'
import Title from "@/text/Title";

function Blog(props) {
    return (
        <Section id="blog-page">

			<Title title={'portfolio.title.header'} text={'portfolio.preview.title.text'}/>

			<div className="blog">
                <Card/>
                <Card/>
                <Card/>
            </div>
        </Section>
    )
}

export default Blog
