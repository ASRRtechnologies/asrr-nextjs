import React, {useEffect, useState} from 'react'
import {motion} from 'framer-motion'
import {useRouter} from 'next/router'
import styled from '@emotion/styled'
import useI18n from '../../hooks/use-i18n'
import Chevron from '../icons/Chevron'
import Button from '../Button'
import Wave from 'react-wavify'
import {useTheme} from '../../context/theme/ThemeContext'
import {previewServices} from "../../data/services";

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

const textEasing = [.42, 0, .58, 1];

const textVariant = {
    show: {
        translateY: "0%",
        transition: {
            delay: 0.5,
            duration: 0.6,
            ease: textEasing,
        }
    },
    hidden: {
        translateY: "125%",
        transition: {
            delay: 0.2,
            duration: 0.3,
            ease: textEasing,
        }
    }
};

const mouseVariant = {
    show: {
        opacity: 1,
        transition: {
            delay: 0.8,
            duration: 0.6,
            ease: textEasing,
        }
    },
    hidden: {
        opacity: 0,
        transition: {
            delay: 0.4,
            duration: 0.5,
            ease: textEasing,
        }
    }
};

function HomeLanding({title, text, image, boxes, projects}) {
    const i18n = useI18n();
    const router = useRouter();
    const darkmode = useTheme().dark;
    // const [services, setServices] = useState([]);
    const navigate = (url) => router.push(url).then(null);

    const setLandingHeight = () => {
        // if (window.matchMedia('(max-width: 1200px)').matches) {
        // 	landing.current.style.height = `${window.innerHeight}px`
        // }
    };

    useEffect(() => {
        setLandingHeight();
    });

    return (
        <Wrapper className="landing-container">
            <div className="landing-text-container">
                <div className="landing-text-wrapper">
                    <div className="landing-text">
					<span className="landing-overflow">
						<motion.h1 initial="hidden" animate="show" exit="hidden"
                                   variants={textVariant}>{i18n.t(title)}</motion.h1>
					</span>

                        <span className="landing-overflow">
						<motion.p initial="hidden" animate="show" exit="hidden"
                                  variants={textVariant}>
                            {i18n.t(text)}
						</motion.p>
					</span>
                        <span className="landing-overflow">
                                <Button custom to="/portfolio" title="buttons.cases"/>
                        </span>
                    </div>

                    <div className="landing-bullets">
                        {
                            previewServices.map((d, i) => {
                                return (
                                    <>
                                    <span className="landing-overflow margin-bottom">
                                        <motion.h3
                                            className={`${!darkmode ? "animated-link-dark" : "animated-link-light"} bold`}
                                            onClick={() => navigate(`/services/${i18n.t(d.route)}`)}
                                            initial="hidden" animate="show" exit="hidden"
                                            variants={textVariant}>
                                            {i18n.t(d.title)}
                                        </motion.h3>
                                        <Chevron/>

                                    </span>
                                        <span className="landing-overflow">
                        	                <motion.h4 initial="hidden" animate="show" exit="hidden"
                                                       variants={textVariant}>
                                                       {i18n.t(d.landingText)}
                        	                 </motion.h4>
                                        </span>
                                    </>

                                )
                            })
                        }
                    </div>
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

            <section id="scroll-mouse">
                <a href="#home-page-services">
                    <motion.span initial="hidden" animate="show" exit="hidden" variants={mouseVariant}
                                 className={`home-landing ${darkmode ? "scroll-down-dark" : "scroll-down-light"}`}/>
                </a>
            </section>
        </Wrapper>
    )
}

export default HomeLanding
