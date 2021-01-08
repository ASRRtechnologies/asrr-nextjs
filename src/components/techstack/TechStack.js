import React from 'react'
import Section from '../layout/Section'
import Title from '../utillities/titles/Title'
import styled from '@emotion/styled'
import react from '#/techstack/react-black-min.webp'
import reactnative from '#/techstack/react-native-black-min.webp'
import spring from '#/techstack/spring-boot-logo-black-min.webp'
import kubernetes from '#/techstack/kubernetes-min.webp'
import docker from '#/techstack/docker-black-min.webp'
import nextjs from '#/techstack/nextjs-min.webp'
import {useTheme} from '../../context/theme/ThemeContext'
import Fade from "react-reveal/Fade";
import PictureFallback from "@/utillities/titles/PictureFallback";


const Wrapper = styled(Section)`
        background: ${props => props.theme.home.techstack};
 }`

const techList = [
    {logo: react, alt: 'react'},
    {logo: spring, alt: 'spring boot'},
    {logo: reactnative, alt: 'react-native'},
    {logo: kubernetes, alt: 'kubernetes'},
    {logo: docker, alt: 'docker'},
    {logo: nextjs, alt: 'nextjs'},
]

function TechStack({data, basePath}) {

    const darkmode = useTheme().dark

    const Tech = ({image, fallback, alt, className}) => {
        return (
            <div className="tech-grid-cell">
                <PictureFallback fallbackImage={`${basePath}/${fallback}`} image={`${basePath}/${image}`}
                                 alt={alt} className={className}/>
            </div>
        )
    };

    return (
        <Wrapper>
            <Title title={data.title} subHeader={data.subheader} header={data.header}/>
            <Fade bottom>
                <div className="techstack">
                    <div className="techgrid">
                        {data.technologies.map((data, i) => (
                            <Tech className={darkmode ? 'tech-image tech-dark' : 'tech-image '} image={data.image_webp}
                                  fallback={data.image} alt={data.alt}/>
                        ))}
                    </div>
                </div>
            </Fade>

        </Wrapper>
    )
}

export default TechStack

