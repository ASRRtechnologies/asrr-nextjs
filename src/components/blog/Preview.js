import React from 'react'
import Section from '@/layout/Section'
import Title from '@/utillities/titles/Title'
import ReadMore from '@/utillities/text/ReadMore'
import styled from '@emotion/styled'
import CardFadeAnimation from '@/animation/CardFadeAnimation'
import BlogCard from '@/blog/BlogCard'

const Wrapper = styled(Section)`
        background: ${props => props.theme.home.blog};
 }`

function Preview ({ data, selectedBlogs }) {
	return (
		<Wrapper>
			<Title title={data.title} subHeader={data.subheader} header={data.header}/>
			{console.log(selectedBlogs)}

			<div className="cards-container">
				<CardFadeAnimation>
					{selectedBlogs.map(({ title, card, info, type }) => {
						return (
							<BlogCard article={card} info={info} name={title} type={type}/>
						)
					})}
				</CardFadeAnimation>
			</div>

			<div className="read-more-wrapper">
				<ReadMore className="subheader" to="/blog" text={data.button.title}/>
			</div>
		</Wrapper>
	)
}

export default Preview
