import React, {useEffect, useState} from 'react'
import Section from '../layout/Section'
import Card from './Card'
import Title from '../titles/Title'
import {portfolio} from '../../data/portfolio'
import Contact from '../../components/contact/Preview'
import ReadMore from "@/text/ReadMore";
import styled from "@emotion/styled";
import Fade from "react-reveal";

const Wrapper = styled(Section)`
        background: ${props => props.theme.home.portfolio};
 }`;

function Portfolio({preview}) {

    const [cases, setCases] = useState([]);

    useEffect(() => {
        setCases(portfolio.slice(0, 3));
    }, []);

    return (
        <Wrapper>
            <Title basePath={'portfolio.preview.header'} compact noSection/>

            <div className="portfolio">
                {cases.map(({image, id, type, href}, i) => {
                    return (
                            <Card redirect={href} route={`/portfolio/case/${id}`} client={`cases.${id}.client`} img={image}
                                  discipline={`cases.${id}.discipline`} title={`cases.${id}.title`}/>
                    )
                })}
            </div>

            <ReadMore className="read-more-big" to="/portfolio" text="buttons.portfolio"/>
        </Wrapper>
    )
}

export default Portfolio
