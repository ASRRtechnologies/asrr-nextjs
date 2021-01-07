import React from 'react'
import {useRouter} from 'next/router'
import styled from '@emotion/styled'
import useI18n from '../../hooks/use-i18n'
import Button from '../buttons/Button'
import {useTheme} from '../../context/theme/ThemeContext'
import useScreenHeight from '../../hooks/helper-functions'
import Fade from 'react-reveal/Fade';
import image from "#/landing/colorful-earth.jpg";

function SmallLanding({title, text, image, imageWebp, alt}) {

    return (
        <div className="landing-small">

            <div className="landing-title-small">
                <Fade bottom>
                    <h1 className="slogan">{title}</h1>
                </Fade>
                <Fade delay={200} bottom>
                    <p className="text">{text}</p>
                </Fade>
            </div>

                <picture>
                    <source srcSet={imageWebp} type="image/webp"/>
                    <source srcSet={image} type="image/jpeg"/>
                    <img src={image} alt={alt}/>
                </picture>

        </div>
    )
}

export default SmallLanding
