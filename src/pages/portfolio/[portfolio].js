import React, { useContext, useEffect, useState } from 'react'
import {cases} from "../../data/cases";
import Section from '@/layout/Section'
import Slider from 'react-slick'
import styled from '@emotion/styled'
import Animation from '@/animation/Animation'
import Demo from '@/portfolio/Demo'
import Preview from "@/contact/Preview";
import useI18n from "../../hooks/use-i18n";
import { AnimationContext } from '../../context/animations/AnimationContext'

const Landing = styled('div')`
      background-color: ${props => props.theme.portfolio.landing};
`

const Process = styled('div')`
      background-color: ${props => props.theme.portfolio.process};
`

const ShowCase = styled('div')`
      background-color: ${props => props.theme.portfolio.showcase};
`

const OtherCases = styled('div')`
      background-color: ${props => props.theme.portfolio.otherCases};
`

function Page({data}) {
    const i18n = useI18n();
    const animate = useContext(AnimationContext);
    const [bullets, setBulletPoints] = useState("")

    useEffect(() => {
        (animate.appLoaded) ? animate.animation.secondLoad() : null;


        setBulletPoints(i18n.t(data.bullets))
        console.log(bullets)


    }, []);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
        ]
    };


    return (
        <div className="portfolio-page">
            <Landing className="portfolio-page-landing">
                <h1>{i18n.t(data.title_1)}</h1>
                <h1>{i18n.t(data.title_1)}</h1>
                {/*<div className="portfolio-page-back"></div>*/}
                <div className="portfolio-page-landing-wrapper">
                    <text>
                        <Animation animation="fade-up" delay="300">
                            <h2>{i18n.t(data.title_1)}</h2>
                            <p>{i18n.t(data.text_1)}</p>
                        </Animation>
                    </text>
                    <Animation animation="fade-up" delay="500">
                        <img alt="image" src={data.landing}/>
                    </Animation>.
                </div>
            </Landing>

            <Process className="portfolio-page-work">
                <Section>
                    <text>
                        <Animation animation="fade-up" delay="300">
                            <h2>{i18n.t(data.title_2)}</h2>
                            <p>{i18n.t(data.text_2)}</p>
                            <h2>{i18n.t(data.title_3)}</h2>
                            {/*{console.log(i18n.t(data.bullets))}*/}
                            {/*{i18n.t(data.bullets).map((d) => {*/}
                                {/*return <p>{d}</p>*/}
                            {/*})}*/}
                        </Animation>
                    </text>
                    <Animation animation="fade-up" delay="500">
                        <Slider {...settings}>
                            {data.slider.map((d, i) => {
                                return (
                                    <div key={d} className={`portfolio-page-slider-card ${i===0 && "no-margin"}`}>
                                        <img src={d}/>
                                    </div>
                                )
                            })}
                        </Slider>
                    </Animation>
                </Section>
            </Process>

            <ShowCase className="portfolio-page-result">
                <Section>
                    <text>
                        <Animation animation="fade-up" delay="300">
                            <h2>{i18n.t(data.title_3)}</h2>
                            <p>{i18n.t(data.text_3)}</p>
                        </Animation>
                    </text>
                    <Animation animation="fade-up" delay="500">
                        {data.demo ? (<>
                                <Demo url={data.url}/>
                                <a className="portfolio-page-link link" url={data.url}>Or
                                    visit the site</a>
                            </>

                        ) : (<img className="portfolio-result-image" src={data.result}/>
                        )}
                    </Animation>
                </Section>
            </ShowCase>

            <OtherCases className="portfolio-page-other-cases">
                <Section>
                    <text>
                        <Animation animation="fade-up" delay="300">
                            <h2>Other Cases</h2>
                            <p>Take a look at other cases we have worked on.</p>
                        </Animation>
                    </text>
                    <Animation animation="fade-up" delay="500">
                        <div className="portfolio-page-cases">
                            <div></div>
                        </div>
                    </Animation>
                </Section>
            </OtherCases>
            <Preview/>
        </div>
    )
}


Page.getInitialProps = ({ query }) => {
    let data = cases.find(data => data.id === query.portfolio);
    console.log(data)
    return {
        data
    };
};

export default Page;

