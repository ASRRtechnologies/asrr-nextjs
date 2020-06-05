import React, { useContext, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import logo from '../../../public/assets/images/logo/asrr-logo-spacing.svg'
import logoWhite from '../../../public/assets/images/logo/asrr-logo-spacing-white.svg'
import { AnimationContext } from '../../context/animations/AnimationContext'
import { useRouter } from 'next/router'
import { useTheme } from '../../context/theme/ThemeContext'

function Overlay () {
	const darkTheme = useTheme();
	const animate = useContext(AnimationContext);
	const animation = animate.animation.overlay;
	const router = useRouter();
	const overlay = useRef();

	const setOverlayHeight = () => {
		if (window.matchMedia("(max-width: 1200px)").matches) {
			overlay.current.style.height = `${window.innerHeight}px`;
		}
	};

	useEffect(() => {
		animate.animation.firstLoad();
		setOverlayHeight();
	}, []);

	return (
		<motion.div ref={overlay} animate={animation.background.animate} initial={animation.background.initial}
					className="transition-animation"
					style={{
						backgroundColor: darkTheme.dark ? '#0a0a0a' : '#ffffff',
						color: darkTheme.dark ? '#ffffff' : '#1a1a1a',
					}}>
                    <span className="element-overflow">
                        <motion.div animate={animation.box.animate} initial={animation.box.initial}
									className="element-overflow-background"> </motion.div>
						{/*If homepage is loaded show ASRR logo else show path name on loading*/}
						{router.pathname === '/' ?
							(
								<motion.img animate={animation.logo.animate} initial={animation.logo.initial}
											src={darkTheme.dark ? logoWhite : logo }  alt="asrr"/>
							)
							: (
								<motion.h1 className="animation-text" animate={animation.logo.animate}
										   initial={animation.logo.initial}>
									{router.pathname.split('/')}
								</motion.h1>
							)}
                    </span>
		</motion.div>
	)
}

export default Overlay
