import React from 'react'
import Section from '../layout/Section'
import Title from '../titles/Title'
import {portfolio} from '../../data/portfolio'
import Fade from "react-reveal/Fade";
import Link from "next/link";
import styled from "@emotion/styled";
import useI18n from "../../hooks/use-i18n";

const Wrapper = styled(Section)`
        background: ${props => props.theme.layout};
`;

const Card = styled('div')`
        box-shadow: ${props => props.theme.card.portfolio};
`;

function Portfolio({preview}) {
    let i18n = useI18n();
    return (
        <Wrapper id="portfolio-page">
            <Title basePath={'portfolio.preview.header'}/>
            <div className={`portfolio`}>
                {portfolio.map(({image, id, type, href}, i) => {
                    return (
                        <Fade delay={i * 300} bottom>
                            <div className="portfolio-card card-margin-bottom">
                                <Link href={`/portfolio/case/${id}`}>
                                    <a className="portfolio-card-inner">

                                        <Card className="portfolio-card-image-wrapper">
                                            <div className="portfolio-card-image">
                                                <img src={image} alt="image"/>
                                            </div>
                                        </Card>
                                        <div className="portfolio-card-text">
                                            <h1 className="label-small-margin">{i18n.t(`cases.${id}.discipline`)}</h1>
                                            <h2 className="subheader">{i18n.t(`cases.${id}.client`)}</h2>
                                            <p className="text">{i18n.t(`cases.${id}.title`)}</p>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        </Fade>
                    )
                })}
            </div>
        </Wrapper>
    )
}

export default Portfolio
