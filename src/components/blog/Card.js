import React from 'react'
import fallback from '#/clients/form/case-image.jpg'
import styled from '@emotion/styled'
import ReadMore from '@/text/ReadMore'
import useI18n from '../../hooks/use-i18n'

const InnerWrapper = styled('div')`
        box-shadow: ${props => props.theme.card.shadow};
        background: ${props => props.theme.card.background};
`;

function Card (props) {
	const i18n = useI18n();
	let {type, name, image} = props.blog;


	return (
		<div className="blog-card">
			<InnerWrapper className="blog-card-inner">
				<div className="blog-card-image">
					<img src={image ? image : fallback} alt="image"/>
				</div>

				<div className="blog-card-text">
					<h4>{i18n.t(`blog.types.${type}`)}</h4>
					<h2>{i18n.t(`blog.${type}.${name}.card.title`)}</h2>
					<p>{i18n.t(`blog.${type}.${name}.card.description`)}</p>
					<ReadMore noAnimation={true} className="read-more-portfolio" text="buttons.blog" to={`/blog/${type}/${name}`}/>
				</div>
			</InnerWrapper>
		</div>
	)
}

export default Card
