import React from 'react'
import Section from '@/layout/Section'
import Title from '@/utillities/titles/Title'
import ReadMore from '@/utillities/text/ReadMore'
import styled from '@emotion/styled'
import CardFadeAnimation from '@/animation/CardFadeAnimation'
import BlogCard from '@/blog/BlogCard'
import PortfolioCard from '@/portfolio/PortfolioCard'

const Wrapper = styled(Section)`
        background: ${props => props.theme.home.blog};
 }`

function Preview ({ data, basePath, selectedBlogs }) {
	return (
		<Wrapper>
			<Title title={data.title} subHeader={data.subheader} header={data.header}/>

			<CardFadeAnimation>
				{/*{selectedBlogs.map(({title, card, info}) => {*/}
				{/*	return (*/}
				{/*		<PortfolioCard project={card} client={info.client} basePath={`${basePath}/${title.toLowerCase()}`}/>*/}
				{/*	)*/}
				{/*})}*/}
			</CardFadeAnimation>

			<div className="read-more-wrapper">
				<ReadMore className="subheader" to={data.button.url} text={data.button.title}/>
			</div>
		</Wrapper>
	)
}

export default Preview
