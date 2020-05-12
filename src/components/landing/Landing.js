import React, {useEffect, useContext, useState} from 'react'
import {motion, useAnimation} from 'framer-motion'
import image from '../../../public/assets/images/landing/colorful-earth-hq.jpg'
import {useRouter} from 'next/router'
import {AnimationContext} from "../../context/animations/AnimationContext";
import LandingHeader from "../header/LandingHeader";

const cards = [
    {sector: "Construction", title: "Construction", url: "/construction"},
    {sector: "Construction", title: "Construction", url: "/construction"},
    {sector: "Construction", title: "Construction", url: "/construction"},
    {sector: "Construction", title: "Construction", url: "/construction"},
];

function Landing(props) {

    const animate = useContext(AnimationContext);
    const animation = animate.animation.landing;
    const [hover, setHover] = useState(false);
    const [activeCard, setActiveCard] = useState({
        active:false,
        index:0
    });
    const router = useRouter();

    const navigate = (url) => {
        router.push(url).then(null)
    };

    //If card area is hovered on only then perform blur action
    const hoverCardArea = () => {
        setHover(true)
    };

    //If card area is hovered on only then perform blur action
    const leaveCardArea = () => {
        setHover(false)
    };

    //Check if a specific card is hovered on and set index as activeCard
    const hoverSpecificCard = (i) => {
        setActiveCard({
            active: true,
            index:i
        })
    };

    //Reset current hovered card to null
    const leaveSpecificCard = () => {
            setActiveCard({
                active: true,
                index:null
            })
    };

    return (
        <motion.div className="landing-container">
            {/*<LandingHeader/>*/}
            <img className="background" src={image} alt="drone"/>

            <div className="landing-text">
				<span className="landing-overflow">
                    <motion.h1 initial={animation.landingText.initial} exit={animation.landingText.exit}
                               animate={animation.landingText.animate}>Redefining innovative</motion.h1>
				</span>

                <span className="landing-overflow">
					<motion.p initial={animation.landingText.initial} animate={animation.landingText.animate}
                              exit={animation.landingText.exit}
                              custom={0.5}>
                        See what ASRR can do for your company today
					</motion.p>
				</span>

                <span className="landing-overflow">
                        <motion.p onClick={() => navigate("projects")} initial={animation.landingText.initial}
                                  exit={animation.landingText.exit}
                                  animate={animation.landingText.animate}
                                  custom={1}>
                            See all projects
                        </motion.p>
				</span>
            </div>

            <motion.div
                        initial={animation.landingCards.initial} animate={animation.landingCards.animate}
                        exit={animation.landingCards.exit} className="landing-box-container">
                <div  onMouseEnter={hoverCardArea} onMouseLeave={leaveCardArea} className="landing-box-wrapper">
                    {cards.map((i, data) => {
                        return (<div onMouseEnter={() => hoverSpecificCard(i)}
                                     onMouseLeave={leaveSpecificCard}
                                     className={`landing-box ${activeCard.index !== i && hover && "blur"}`}
                                     onClick={() => navigate(data.url)}>
                            <h4>Building</h4>
                            <h3>Building</h3>
                        </div>)
                    })}
                </div>
            </motion.div>
        </motion.div>
    )
}

export default Landing
