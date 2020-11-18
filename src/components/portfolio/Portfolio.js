import React from 'react'
import Section from '../layout/Section'
import Title from '../titles/Title'
import {portfolio} from '../../data/portfolio'
import Fade from "react-reveal/Fade";
import Link from "next/link";
import styled from "@emotion/styled";
import useI18n from "../../hooks/use-i18n";
import t from "../../hooks/translator";
import {animationDelay} from "../../functions/helper-functions";

const Wrapper = styled(Section)`
        background: ${props => props.theme.layout};
`;

const Card = styled('div')`
        box-shadow: ${props => props.theme.card.portfolio};
`;

function Portfolio({preview}) {
    return (
        <Wrapper className="no-landing">
            <Title basePath={'portfolio.preview.header'}/>
            <div className={`portfolio`}>
                {portfolio.map(({image, id, type, href}, i) => {

                    if (preview && i > 3) return;

                    return (
                        <Fade delay={200} bottom>
                            <div className="portfolio-card card-margin-bottom">
                                <Link href={`/portfolio/case/${id}`}>
                                    <a className="portfolio-card-inner">

                                        <Card className="portfolio-card-image-wrapper">
                                            <div className="portfolio-card-image">
                                                <img src={image} alt="image"/>
                                            </div>
                                        </Card>
                                        <div className="portfolio-card-text">
                                            <h1 className="label-small-margin">{t(`cases.${id}.content.smallTitle`)}</h1>
                                            <h2 className="subheader">{t(`cases.${id}.content.title`)}</h2>
                                            <p className="text">{t(`cases.${id}.content.subtitle`)}</p>
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
