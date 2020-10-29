import React from 'react'
import {useRouter} from 'next/router'
import styled from '@emotion/styled'
import useI18n from '../../hooks/use-i18n'
import Button from '../Button'
import {useTheme} from '../../context/theme/ThemeContext'
import useScreenHeight from '../../hooks/helper-functions'
import Fade from 'react-reveal/Fade';
import Wave from "react-wavify";

const Wrapper = styled('div')`
        background-color: ${props => props.theme.landing.background};
 }`;

function BigLanding({title, text}) {
    const i18n = useI18n();
    const router = useRouter();
    const darkmode = useTheme().dark;
    const navigate = (url) => router.push(url).then(null);
    const headerHeight = 80;

    return (
        <Wrapper className="landing">

            <div className="landing-title-container">
                <div className="landing-title">
                    <Fade bottom>
                        <h1>{i18n.t(title)}</h1>
                    </Fade>
                    <Fade delay={200} bottom>
                        <p>{i18n.t(text)}</p>
                    </Fade>
                    <Fade delay={400} bottom>
                        <Button custom to="/portfolio" title="buttons.cases"/>
                    </Fade>
                </div>
            </div>

            <div className="landing-wave">

                <div className="wave wave-top">
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
                </div>
                <div className="wave wave-bottom">
                    <Wave
                        fill={`${darkmode ? "#131313" : "#FBFBFB"}`}
                        paused={false}
                        options={{
                            height: 15,
                            amplitude: 15,
                            speed: 0.35,
                            points: 9
                        }}
                    />
                </div>
            </div>

        </Wrapper>
    )
}

export default BigLanding
