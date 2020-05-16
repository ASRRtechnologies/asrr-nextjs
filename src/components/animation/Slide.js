import React, { useContext, useEffect } from 'react'
import { motion } from 'framer-motion'
import logo from '../../../public/assets/images/logo/asrr-logo-spacing.svg'
import { AnimationContext } from '../../context/animations/AnimationContext'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import { useTheme } from '../../context/theme/ThemeContext'

const Wrapper = styled('nav')`
        background-color: ${props => props.theme.header.background};
        color: ${props => props.theme.header.font};
`;

function Overlay () {
	const darkTheme = useTheme();
	const animate = useContext(AnimationContext);
	const animation = animate.animation.overlay;
	const router = useRouter();

	useEffect(() => {
		animate.animation.firstLoad()
	}, []);

	return (
		<motion.div animate={animation.background.animate} initial={animation.background.initial}
					className="transition-animation"
					style={{
						backgroundColor: darkTheme.dark ? '#0a0a0a' : '#ffffff',
						color: darkTheme.dark ? '#ffffff' : '#1a1a1a',
					}}>
		</motion.div>
	)
}

export default Overlay
