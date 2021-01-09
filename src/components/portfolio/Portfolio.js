import React from 'react'
import Section from '../layout/Section'
import styled from '@emotion/styled'
import Title from '@/utillities/titles/Title'
import CardFadeAnimation from '@/animation/CardFadeAnimation'
import BlogCard from '@/blog/BlogCard'

const Wrapper = styled(Section)`
        background: ${props => props.theme.home.portfolio};
 }`

function Portfolio ({ data, basePath }) {

	return (
		<Wrapper>
			{/*<Title title={data.title} subHeader={data.subheader} header={data.header}/>*/}
			{/*<div className="cards-container">*/}
			{/*	<CardFadeAnimation>*/}
			{/*		{data.cards.map((blog) => <BlogCard data={blog} basePath={basePath}/>)}*/}
			{/*	</CardFadeAnimation>*/}
			{/*</div>*/}
		</Wrapper>
	)
}

export default Portfolio

