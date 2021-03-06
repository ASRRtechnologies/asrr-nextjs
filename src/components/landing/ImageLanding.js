import React, {useRef} from 'react'
import styled from '@emotion/styled'
import {useTheme} from '../../context/theme/ThemeContext'
import {Fade} from 'react-awesome-reveal'
import NavigationButtonWhite from "@/buttons/NavigationButtonWhite";

const Wrapper = styled('div')`
  position: relative;
  background: ${props => props.theme.landing.background};

  img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
    object-fit: cover;
  }

  &:before {

    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #1a1a1a;
    opacity: 0.35;
    z-index: 10;

  }
}`;

function BigLanding({title, text, button, image}) {

    const darkmode = useTheme().dark;
    const landing = useRef('');

    return (
        <Wrapper ref={landing} className="landing">

            <div className="landing-title-container">

                <img src={image} alt="asrr-landing"/>

                <div className="landing-title">

                    <Fade triggerOnce cascade damping={0.3} direction="up">
                        <h1 className="font-landing-title">{title}</h1>
                        <p className="font-landing-text">{text}</p>
                        <NavigationButtonWhite to={button.url} title={button.title}/>
                    </Fade>

                </div>
            </div>

        </Wrapper>
    )
}

export default BigLanding
