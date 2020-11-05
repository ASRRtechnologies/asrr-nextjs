import React, {useEffect, useState} from 'react'
import Section from '../layout/Section'
import Title from '../titles/Title'
import {portfolio} from '../../data/portfolio'
import ReadMore from "@/text/ReadMore";
import styled from "@emotion/styled";
import Fade from "react-reveal/Fade";
import Link from "next/link";
import useI18n from "../../hooks/use-i18n";
import {animationDelay, animationdelay} from "../../functions/helper-functions";
import t from "../../hooks/translator";

const Wrapper = styled(Section)`
        background: ${props => props.theme.home.portfolio};
 }`;

const Card = styled('div')`
        box-shadow: ${props => props.theme.card.portfolio};
`;

function Portfolio({preview}) {

    const [cases, setCases] = useState([]);
    const i18n = useI18n();

    useEffect(() => {
        setCases(portfolio.slice(0, 3));
    }, []);

    return (
        <Wrapper>

            <Title basePath={'portfolio.preview.header'} compact noSection/>

            <div className="portfolio">
                {cases.map(({image, id, type, href}, i) => {
                    {animationDelay([0, 400, 800], 3, i )}

                    return (
                        <Fade delay={animationDelay([0, 400, 800], 3, i )} bottom>
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

            <div className="read-more-wrapper">
                <ReadMore className="subheader" to="/portfolio" text="buttons.portfolio"/>
            </div>

        </Wrapper>
    )
}

export default Portfolio

