import React from 'react'
import {useRouter} from 'next/router'
import styled from '@emotion/styled'
import useI18n from '../../hooks/use-i18n'
import Button from '../Button'
import {useTheme} from '../../context/theme/ThemeContext'
import useScreenHeight from '../../hooks/helper-functions'
import Fade from 'react-reveal/Fade';
import image from "#/landing/colorful-earth.jpg";

function SmallLanding({title, text}) {
    const i18n = useI18n();
    const router = useRouter();

    return (
        <div className="landing-small">

            <div className="landing-title-small">
                <Fade bottom>
                    <h1>test</h1>
                </Fade>
                <Fade delay={200} bottom>
                    <p>test2</p>
                </Fade>
            </div>

            <img src={image} alt="image"/>

        </div>
    )
}

export default SmallLanding
