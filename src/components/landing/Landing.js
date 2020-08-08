import React, {useContext, useEffect, useRef, useState} from 'react'
import {motion} from 'framer-motion'
import {useRouter} from 'next/router'
import {AnimationContext} from '../../context/animations/AnimationContext'
import styled from '@emotion/styled'
import useI18n from '../../hooks/use-i18n'
import Chevron from '../icons/Chevron'
import Button from '../Button'
import Wave from 'react-wavify'
import {useTheme} from '../../context/theme/ThemeContext'

const Wrapper = styled('div')`
        background-color: ${props => props.theme.landing.background};
        .landing-bullets{
        	svg{
        		path{
        			fill: ${props => props.theme.fonts.title}
        		}
        	}
        }
        `;

function Landing({title, text, image, boxes, projects}) {
    const i18n = useI18n()
    const animate = useContext(AnimationContext)
    const animation = animate.animation.landing
    const router = useRouter()
    const landing = useRef(null)
    const darkmode = useTheme().dark;
    const navigate = (url) => {
        router.push(url).then(null)
    }

    const setLandingHeight = () => {
        // if (window.matchMedia('(max-width: 1200px)').matches) {
        // 	landing.current.style.height = `${window.innerHeight}px`
        // }
    }

    useEffect(() => setLandingHeight())

    return (
        <Wrapper className="landing-container">
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
						<motion.p   initial={animation.landingText.initial}
                                  animate={animation.landingText.animate}
                                  exit={animation.landingText.exit}
                                  custom={0.5}>
							Responsible for creating innovative and fast cutting
							software development while being cheap and cost friendly
						</motion.p>
					</span>

                    <span className="landing-overflow">
						<Button custom to="/services" title="See All Projects"/>
					</span>

                </div>

                <div className="landing-bullets">
					<span className="landing-overflow margin-bottom">
						<motion.p className={`${!darkmode ? "animated-link-dark" : "animated-link-light"} bold`}
                                  onClick={() => navigate("/services")} initial={animation.landingText.initial}
                                  exit={animation.landingText.exit}
                                  animate={animation.landingText.animate}>Full-Stack Software Development <Chevron/> </motion.p>
						<motion.h4 initial={animation.landingText.initial} animate={animation.landingText.animate}
                                   exit={animation.landingText.exit}
                                   custom={0.5}>
							Full fledged scalable and response IT teams ready when you want.
						</motion.h4>
					</span>

                    <span className="landing-overflow margin-bottom">
						<motion.p className={`${!darkmode ? "animated-link-dark" : "animated-link-light"} bold`}
                                  onClick={() => navigate("/services")} initial={animation.landingText.initial}
                                  exit={animation.landingText.exit}
                                  animate={animation.landingText.animate}>Full-Stack Software Development <Chevron/> </motion.p>
						<motion.h4 initial={animation.landingText.initial} animate={animation.landingText.animate}
                                   exit={animation.landingText.exit}
                                   custom={0.5}>
							Full fledged scalable and response IT.
						</motion.h4>
					</span>

                    <span className="landing-overflow">
						<motion.p className={`${!darkmode ? "animated-link-dark" : "animated-link-light"} bold`}
                                  onClick={() => navigate("/services")} initial={animation.landingText.initial}
                                  exit={animation.landingText.exit}
                                  animate={animation.landingText.animate}>Full-Stack Software Development <Chevron/> </motion.p>
						<motion.h4 initial={animation.landingText.initial} animate={animation.landingText.animate}
                                   exit={animation.landingText.exit}
                                   custom={0.5}>
							Full fledged scalable and.
						</motion.h4>
					</span>

                </div>
            </div>

            <div className="landing-wave">
                {console.log(darkmode)}
                <Wave fill="#ff6961"
					  // fill={`${darkmode ? "#1a1a1a" : "#F3F4F5"}`}
                      paused={false}
                      options={{
                          height: 50,
                          amplitude: 50,
                          speed: 0.25,
                          points: 7
                      }}
                />
                <div className="position-absolute-wave">
                    <Wave
                        fill={`${darkmode ? "#131313" : "#FBFBFB"}`}
                        paused={false}
                        options={{
                            height: 15,
                            amplitude: 15,
                            speed: 0.35,
                            points: 6
                        }}
                    />
                </div>
            </div>

        </Wrapper>
    )
}

export default Landing
