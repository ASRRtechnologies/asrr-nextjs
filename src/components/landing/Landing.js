import React, {useEffect, useContext} from 'react'
import {motion, useAnimation} from 'framer-motion'
import image from '../../../public/assets/images/drone.jpg'
import { useRouter } from 'next/router'
import {AnimationContext} from "../../context/AnimationContext";

function Landing(props) {

    const animate = useContext(AnimationContext);
    const animation = animate.animation.landing;
    const router = useRouter();

    const navigate = (url) => {
        router.push(url).then(null)
    };

    return (
        <motion.div className="landing-container">
            <img src={image} alt="drone"/>

            <div className="landing-text">
				<span className="landing-overflow">
                    <motion.h1 initial={animation.landingText.initial} animate={animation.landingText.animate}>Redefining innovative</motion.h1>
				</span>

                <span className="landing-overflow">
					<motion.p initial={animation.landingText.initial} animate={animation.landingText.animate}
                              custom={1}>
                        See what ASRR can do for your company today
					</motion.p>
				</span>

                <span className="landing-overflow">
                        <motion.p onClick={() => navigate("projects")} initial={animation.landingText.initial} animate={animation.landingText.animate}
                                  custom={1.5}>
                            See all projects
                        </motion.p>
				</span>

            </div>

            <motion.div  initial={animation.landingCards.initial} animate={animation.landingCards.animate} exit={ animation.landingCards.exit} className="landing-box-container">
                <div className="landing-box-wrapper">
                    <div className="landing-box" onClick={() => navigate("projects")}>
                        <h4>Building</h4>
                        <h3>Building</h3>
                    </div>

                    <div className="landing-box">
                        <h4>Building</h4>
                        <h3>Building</h3>
                    </div>

                    <div className="landing-box">
                        <h4>Building</h4>
                        <h3>Building</h3>
                    </div>

                    <div className="landing-box">
                        <h4>Building</h4>
                        <h3>Building</h3>
                    </div>

                </div>
            </motion.div>
        </motion.div>
    )
}

export default Landing
