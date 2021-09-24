import React, { useRef } from 'react'
import styled from '@emotion/styled'
import Button from '../buttons/Button'
import { useTheme } from '../../context/theme/ThemeContext'
import Wave from 'react-wavify'
import { Fade } from 'react-awesome-reveal'
import NavigationButton from '@/buttons/NavigationButton'

const Wrapper = styled('div')`
        background: ${props => props.theme.landing.background};
 }`;

function BigLanding ({ title, text, button }) {
	const darkmode = useTheme().dark;
	const landing = useRef('');

 	// const setHeight = () => {
	//         landing.current.style.minHeight = `${window.innerHeight}${-80}px`;
	// };
	//
	// useEffect(() => {
	//     setHeight();
	// },[]);

	return (
		<Wrapper ref={landing} className="landing">

			<div className="landing-title-container">
				<div className="landing-title">

					<Fade triggerOnce cascade damping={0.3} direction="up">
						<h1 className="font-landing-title">{title}</h1>
						<p className="font-landing-text">{text}</p>
						<NavigationButton to={button.url} title={button.title}/>
					</Fade>

				</div>
			</div>

			<div className="landing-wave">

			</div>

		</Wrapper>
	)
}

export default BigLanding
