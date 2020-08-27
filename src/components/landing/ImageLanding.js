import React, {useEffect, useRef} from 'react'
import {motion} from 'framer-motion'
import {useRouter} from 'next/router'
import styled from '@emotion/styled'
import useI18n from '../../hooks/use-i18n'
import {useTheme} from '../../context/theme/ThemeContext'

const Wrapper = styled('div')`
        background: ${props => props.theme.landing.background};
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
        opacity:1,
        transition: {
            delay: 0.8,
            duration: 0.6,
            ease: textEasing,
        }
    },
    hidden: {
        opacity:0,
        transition: {
            delay: 0.4,
            duration: 0.5,
            ease: textEasing,
        }
    }
};

function Landing({title, text, image, className, scrollToID}) {
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
        <Wrapper ref={landing} className={`landing-image-container ${className}`}>
            {/*<img className="landing-image" src={image}/>*/}
            <span className="landing-overflow">
                <motion.h1 initial="hidden" animate="show" exit="hidden" variants={textVariant}>{i18n.t(title)}</motion.h1>
            </span>
            <div id="scroll-mouse">
                <a href={scrollToID}>
                    <motion.span initial="hidden" animate="show" exit="hidden" variants={mouseVariant}
                        className={`${darkmode ? "scroll-down-dark" : "scroll-down-light"}`}/>
                </a>
            </div>
        </Wrapper>
    )
}

export default Landing
