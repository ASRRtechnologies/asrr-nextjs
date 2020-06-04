import React, { useContext, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { AnimationContext } from '../../context/animations/AnimationContext'
import styled from '@emotion/styled'

const Wrapper = styled('div')`
        background-color: ${props => props.theme.header.background};
        border-color: ${props => props.theme.header.background};
        border-style: solid;
        border-width: 2px; 
        `;

const Cards = styled('div')`
        background-color: ${props => props.theme.header.background};
        border-color: ${props => props.theme.header.background};
        border-style: solid;
        border-width: 2px; 
        `;

const cards = [
    {sector: "BIM", title: "Revit Apps", url: "/construction"},
    {sector: "General", title: "Server", url: "/construction"},
    {sector: "Construction", title: "Construction", url: "/construction"},
    {sector: "Construction", title: "Construction", url: "/construction"},
];

function Landing({title, text, image, boxes, projects}) {

    const animate = useContext(AnimationContext);
    const animation = animate.animation.landing;
    const [hover, setHover] = useState(false);
    const [activeCard, setActiveCard] = useState({
        active: false,
        index: 0
    });
    const router = useRouter();
    const landing = useRef(null)

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
            index: i
        })
    };

    //Reset current hovered card to null
    const leaveSpecificCard = () => {
        setActiveCard({
            active: true,
            index: null
        })
    };

    const setLandingHeight = () => {
        if (window.matchMedia("(max-width: 1100px)").matches) {
            landing.current.style.height = `${window.innerHeight}px`;
        }
    };

    useEffect(() => setLandingHeight() , []);

    return (
        <motion.div ref={landing} className="landing-container">
            {/*<LandingHeader/>*/}
            <motion.img initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.3}}}
                        exit={{opacity: 0, transition: {duration: 0.4}}} className="background" src={image}
                        alt="drone"/>

            <div className="landing-text">
				<span className="landing-overflow">
                    <motion.h1 initial={animation.landingText.initial} exit={animation.landingText.exit}
                               animate={animation.landingText.animate}>{title}</motion.h1>
				</span>

                <span className="landing-overflow">
					<motion.p initial={animation.landingText.initial} animate={animation.landingText.animate}
                              exit={animation.landingText.exit}
                              custom={0.5}>
                        {text}
					</motion.p>
				</span>

                <span className="landing-overflow">
                    {projects ? (
                        <motion.p onClick={() => navigate("portfolio")} initial={animation.landingText.initial}
                                  exit={animation.landingText.exit}
                                  animate={animation.landingText.animate}
                                  custom={1}>
                            See all projects
                        </motion.p>
                    ) : null}
				</span>
            </div>

                <motion.div
                    initial={animation.landingCards.initial} animate={animation.landingCards.animate}
                    exit={animation.landingCards.exit} className={`landing-box-container ${projects && "show"}`}>
                    <div onMouseEnter={hoverCardArea} onMouseLeave={leaveCardArea} className="landing-box-wrapper">
                        {cards.map((data, i) => {
                            return (<Cards key={i} onMouseEnter={() => hoverSpecificCard(i)}
                                         onMouseLeave={leaveSpecificCard}
                                         className={`landing-box ${activeCard.index !== i && hover && "blur"}`}
                                         onClick={() => navigate(data.url)}>
                                <h5>0{i+1}</h5>
                                <h4>{data.sector}</h4>
                                <h3>{data.title}</h3>
                            </Cards>)
                        })}
                    </div>
                </motion.div>
        </motion.div>
    )
}

export default Landing
