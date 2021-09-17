import React, { useState } from 'react'
import Section from '@/layout/Section'
import { useTheme } from '../../context/theme/ThemeContext'
import Title from '@/utillities/titles/Title'
import styled from '@emotion/styled'
import { Fade } from 'react-awesome-reveal'
import CardFadeAnimation from '@/animation/CardFadeAnimation'

const Wrapper = styled(Section)`
        background: ${props => props.theme.home.values};
 }`;

function Why ({ data }) {
	const { qualities, title, subheader, header } = data;
	const [currentQuality, setCurrentQuality] = useState(0);
	const darkmode = useTheme().dark;

	return (
		<Wrapper>
			<Title title={title} subHeader={subheader} header={header}/>

			<div className="why-asrr">

				<div className="why-asrr-points why-asrr-center">
					<CardFadeAnimation>
						{qualities.map(({ quality, description }, i) => {
							return (
								<span onClick={() => setCurrentQuality(i)}
									  className={`${i === currentQuality && 'selected-line'}`}>
									<h2 className={`${!darkmode
										? 'animated-link-dark'
										: 'animated-link-light'}`} style={{textAlign: "right"}}>
										{quality}
									</h2>
								</span>
							)
						})}
					</CardFadeAnimation>
				</div>

				<Fade triggerOnce delay={600}>
					<div className="why-asrr-text why-asrr-center">
						<p>{qualities[currentQuality].description}</p>
					</div>
				</Fade>


			</div>

		</Wrapper>
	)
}

export default Why


