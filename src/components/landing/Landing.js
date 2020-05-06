import React from 'react'
import { motion } from 'framer-motion'
import image from '../../../public/assets/images/drone.jpg'
import Link from 'next/link'

const easing = [.6, -0.5, 0.01, 0.99]

const stagger={
	animate:{
		transition: {
			staggerChildren:3
		}
	}
}

//End point of animation
const animate = {
	translateY: 0,
	transition: {
		duration: 1,
		ease: easing,
	},
}

//Begin point of animation, animates from here to animate object
const initial = {
	translateY: '100%',
}

function Landing (props) {
	return (
		<motion.div exit={{ opacity: 0 }} className="landing-container">
			<motion.div variants={stagger} className="landing-text">
				<span className="landing-overflow">
					<motion.h1 animate={animate} initial={initial}>Redefining innovative</motion.h1>
				</span>
				<span className="landing-overflow">
					<motion.p animate={animate} initial={initial}>See what ASRR can do for your company today</motion.p>
				</span>
			</motion.div>
			<Link href="test"><a>Test</a></Link>
			<img src={image} alt="drone"/>
		</motion.div>
	)
}

export default Landing
