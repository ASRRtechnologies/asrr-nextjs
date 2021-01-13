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

				<div className="wave wave-top">
					<Wave fill="#ff6961"
						// fill={`${darkmode ? "#1a1a1a" : "#F3F4F5"}`}
						  paused={false}
						  options={{
							  height: 50,
							  amplitude: 50,
							  speed: 0.25,
							  points: 7,
						  }}
					/>
				</div>
				<div className="wave wave-bottom">
					<Wave
						fill={`${darkmode ? '#131313' : '#fff'}`}
						paused={false}
						options={{
							height: 15,
							amplitude: 15,
							speed: 0.35,
							points: 9,
						}}
					/>
				</div>
			</div>

		</Wrapper>
	)
}

export default BigLanding
