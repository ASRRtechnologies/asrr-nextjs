import React from 'react'
import Section from '@/modules/shared/section/Section'
import Title from '@/utillities/titles/Title'
import styled from '@emotion/styled'
import CardFadeAnimation from '@/animation/CardFadeAnimation'
import BlogCard from '@/blog/BlogCard'

const Wrapper = styled(Section)`
        background: ${props => props.theme.layout};
`;

function Blog ({ data, allBlogs }) {

	const { page_title } = data;


	return (
		<Wrapper className="no-landing">
			<Title title={page_title.title} subHeader={page_title.subheader} header={page_title.header}/>

			<div className="cards-container">
				<CardFadeAnimation>
					{allBlogs.map(({ title, card, info, type }) => {
						return (
							<BlogCard article={card} info={info} name={title} type={type}/>
						)
					})}
				</CardFadeAnimation>
			</div>

		</Wrapper>
	)
}

export default Blog
