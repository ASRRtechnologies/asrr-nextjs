import React from 'react'
import styled from '@emotion/styled'
import PictureFallback from '@/utillities/titles/PictureFallback'
import { Fade } from 'react-awesome-reveal'
import Link from 'next/link'
import { useTheme } from '../../context/theme/ThemeContext'

const Wrapper = styled('div')`
        background: ${props => props.theme.card.background};
        box-shadow: ${props => props.theme.card.shadow};
`;

const Card = ({ data, basePath, route }) => {

	const { image, alt, image_webp, title, text } = data;
	const darkmode = useTheme().dark;

	const ReadMore = ({ to, text }) => {
		return (
			<Link href={to}>
				<a className={`font-card-read-more read-more ${darkmode
					? 'animated-link-light'
					: 'animated-link-dark'}`}>
					Lees meer
				</a>
			</Link>
		)
	};

	return (
		<Fade  fraction={0.4} damping={0.3} triggerOnce direction="up">
			<Wrapper className="service-card">
				<div className="service-card-text">
					<div className="service-card-text-wrapper">
					<span>
						{title && <h1 className="font-card-title">{title}</h1>}
						<p className="font-general">{text}</p>
                        <ReadMore to={`/diensten${route}`}/>
					</span>
					</div>
				</div>

				<div className="service-card-image">
					<div className="service-card-image-wrapper">
						<PictureFallback image={`${basePath}/${image_webp}`} fallbackImage={`${basePath}/${image}`}
										 alt={alt}/>
					</div>
				</div>
			</Wrapper>
		</Fade>
	)
};

export default Card
