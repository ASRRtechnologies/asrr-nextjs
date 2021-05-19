import React from 'react'
import Section from '../layout/Section'
import Title from '../utillities/titles/Title'
import styled from '@emotion/styled'
import { useTheme } from '../../context/theme/ThemeContext'
import PictureFallback from '@/utillities/titles/PictureFallback'
import {clients} from '../../data/clients'
import CardFadeAnimation from '@/animation/CardFadeAnimation'

const Wrapper = styled(Section)`
        background: ${props => props.theme.home.techstack};
 }`;

const Card = ({ image }) => {
    return (
        <div className="client-card">
            {image}
        </div>
    )
};

function ClientGrid ({ data, basePath }) {

    const darkmode = useTheme().dark;

    const Tech = ({ image, fallback, alt, className }) => {
        return (
            <div className="tech-grid-cell">
                <PictureFallback fallbackImage={`${basePath}/${fallback}`} image={`${basePath}/${image}`}
                                 alt={alt} className={className}/>
            </div>
        )
    };

    return (
        <Wrapper>
            {/*<Title title={data.title} subHeader={data.subheader} header={data.header}/>*/}
            <div className="clients-section">
                <div className="client-grid">
                    <CardFadeAnimation>
                        {clients.map((data, i) => (
                            <Card className={darkmode ? 'tech-image tech-dark' : 'tech-image '} image={data.logo}
                                  fallback={data.logo} alt={data.alt}/>
                        ))}
                    </CardFadeAnimation>
                </div>
            </div>
        </Wrapper>
    )
}

export default ClientGrid

