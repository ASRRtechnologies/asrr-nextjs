import React, { useContext, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { AnimationContext } from '../../context/animations/AnimationContext'
import styled from '@emotion/styled'
import useI18n from '../../hooks/use-i18n'
import Chevron from '../icons/Chevron'
import Button from '../Button'
import Link from 'next/link'

const Wrapper = styled('div')`
        background-color: ${props => props.theme.header.background};
        border-color: ${props => props.theme.header.background};
        border-style: solid;
        border-width: 2px; 
        `

const Cards = styled('div')`
        background-color: ${props => props.theme.landing.cards};
        border-color: ${props => props.theme.landing.cards};
        border-style: solid;
        border-width: 2px; 
        `

const cards = [
	{ sector: 'BIM', title: 'teams', url: '/construction' },
	{ sector: 'General', title: 'hardware', url: '/construction' },
	{ sector: 'Construction', title: 'full-stack', url: '/construction' },
	{ sector: 'Construction', title: 'adaptive', url: '/construction' },
]

function Landing ({ title, text, image, boxes, projects }) {
	const i18n = useI18n()
	const animate = useContext(AnimationContext)
	const animation = animate.animation.landing
	const [hover, setHover] = useState(false)
	const [activeCard, setActiveCard] = useState({
		active: false,
		index: 0,
	})
	const router = useRouter()
	const landing = useRef(null)

	const navigate = (url) => {
		router.push(url).then(null)
	}

	//If card area is hovered on only then perform blur action
	const hoverCardArea = () => {
		setHover(true)
	}

	//If card area is hovered on only then perform blur action
	const leaveCardArea = () => {
		setHover(false)
	}

	//Check if a specific card is hovered on and set index as activeCard
	const hoverSpecificCard = (i) => {
		setActiveCard({
			active: true,
			index: i,
		})
	}

	//Reset current hovered card to null
	const leaveSpecificCard = () => {
		setActiveCard({
			active: true,
			index: null,
		})
	}

	const setLandingHeight = () => {
		if (window.matchMedia('(max-width: 1200px)').matches) {
			landing.current.style.height = `${window.innerHeight}px`
		}
	}

	useEffect(() => setLandingHeight())

	return (
		<div className="landing-container">
			{/*<LandingHeader/>*/}
			{/*<motion.img initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.3 } }}*/}
						{/*exit={{ opacity: 0, transition: { duration: 0.4 } }} className="background" src={image}*/}
						{/*alt="drone"/>*/}

			<div className="landing-text-wrapper">
				<div className="landing-text">
					<span className="landing-overflow">
						<motion.h1 initial={animation.landingText.initial} exit={animation.landingText.exit}
								   animate={animation.landingText.animate}>Innovative Software Development</motion.h1>
					</span>

					<span className="landing-overflow">
						<motion.p initial={animation.landingText.initial} animate={animation.landingText.animate}
								  exit={animation.landingText.exit}
								  custom={0.5}>
							Responsible for creating innovative and fast cutting
							software development while being cheap and cost friendly
						</motion.p>
					</span>

					<Button custom to="/" title="See All Projects"/>

				</div>

				<div className="landing-bullets">
					<span className="landing-overflow margin-bottom">
						<motion.p initial={animation.landingText.initial} exit={animation.landingText.exit}
								  animate={animation.landingText.animate}>Full-Stack Software Development <Chevron/> </motion.p>
						<motion.h4 initial={animation.landingText.initial} animate={animation.landingText.animate}
								   exit={animation.landingText.exit}
								   custom={0.5}>
							Full fledged scalable and response IT teams ready when you want.
						</motion.h4>
					</span>

					<span className="landing-overflow margin-bottom">
						<motion.p initial={animation.landingText.initial} exit={animation.landingText.exit}
								  animate={animation.landingText.animate}>Full-Stack Software Development</motion.p>
						<motion.h4 initial={animation.landingText.initial} animate={animation.landingText.animate}
								   exit={animation.landingText.exit}
								   custom={0.5}>
							Full fledged scalable and response IT.
						</motion.h4>
					</span>

					<span className="landing-overflow">
						<motion.p initial={animation.landingText.initial} exit={animation.landingText.exit}
								  animate={animation.landingText.animate}>Full-Stack Software Development</motion.p>
						<motion.h4 initial={animation.landingText.initial} animate={animation.landingText.animate}
								   exit={animation.landingText.exit}
								   custom={0.5}>
							Full fledged scalable and.
						</motion.h4>
					</span>

				</div>
			</div>

		</div>
	)
}

export default Landing
