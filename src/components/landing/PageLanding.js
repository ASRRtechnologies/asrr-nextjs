import React, {useContext, useEffect, useRef, useState} from 'react'
import {motion} from 'framer-motion'
import {useRouter} from 'next/router'
import {AnimationContext} from '../../context/animations/AnimationContext'
import styled from '@emotion/styled'
import useI18n from '../../hooks/use-i18n'
import Chevron from '../icons/Chevron'
import Button from '../buttons/Button'
import Wave from 'react-wavify'
import {useTheme} from '../../context/theme/ThemeContext'

const Wrapper = styled('div')`
        background: ${props => props.theme.landing.background};
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

function Landing({title, text, image, imageClass}) {
    const i18n = useI18n();
    const router = useRouter();
    const landing = useRef(null);
    const darkmode = useTheme().dark;
    const navigate = (url) => {
        router.push(url).then(null)
    };

    const setLandingHeight = () => {
        if (window.matchMedia('(max-width: 1200px)').matches) {
            landing.current.style.height = `${window.innerHeight}px`
        }
    };

    useEffect(() => setLandingHeight());

    return (
        <Wrapper ref={landing} className="landing-container page">
            <div className="landing-text-wrapper">
                <div className="landing-floating-image-wrapper">

                    <div className="landing-floating-image-text">
                     <span className="landing-overflow">
						<motion.h1 initial="hidden" animate="show" exit="hidden"
                                   variants={textVariant}>{i18n.t(title)}
						</motion.h1>
                     </span>
                    </div>


                    <div className="landing-floating-image">
                        {image.length > 0 ? <img className={imageClass} src={image}/> : null}
                    </div>
                </div>
            </div>

        </Wrapper>
    )
}

export default Landing
