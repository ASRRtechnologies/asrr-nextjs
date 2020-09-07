import React, {useEffect, useRef} from 'react'
import {motion} from 'framer-motion'
import {useRouter} from 'next/router'
import styled from '@emotion/styled'
import useI18n from '../../hooks/use-i18n'
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

function Landing({title, text, client, discipline}) {
    const i18n = useI18n();
    const router = useRouter();
    const landing = useRef(null);
    const darkmode = useTheme().dark;
    const navigate = (url) => {
        router.push(url).then(null)
    };

    const setLandingHeight = () => {
        // if (window.matchMedia('(max-width: 1200px)').matches) {
        // 	landing.current.style.height = `${window.innerHeight}px`
        // }
    };

    useEffect(() => setLandingHeight());

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
                                  variants={textVariant}
                                  custom={0.5}>
                            {i18n.t(text)}
						</motion.p>
					</span>
                </div>

                <div className="landing-bullets landing-client-bullets">
					<span className="landing-overflow margin-bottom ">
						<motion.h3 className={`bold`}
                                   initial="hidden" animate="show" exit="hidden"
                                   variants={textVariant}>{i18n.t("general_words.client")}</motion.h3>
						<motion.h4 initial="hidden" animate="show" exit="hidden"
                                   variants={textVariant}
                                   custom={0.5}>
							{i18n.t(client)}
						</motion.h4>
					</span>

                    <span className="landing-overflow">
						<motion.h3 className={`bold`}
                                   initial="hidden" animate="show" exit="hidden"
                                   variants={textVariant}>{i18n.t("general_words.discipline")}</motion.h3>
						<motion.h4 initial="hidden" animate="show" exit="hidden"
                                   variants={textVariant}
                                   custom={0.5}>
							{i18n.t(discipline)}
						</motion.h4>
					</span>

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

        </Wrapper>
    )
}

export default Landing
