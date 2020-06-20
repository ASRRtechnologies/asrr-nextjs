import React from 'react'
import {cases} from "../../data/cases";
import Section from '@/layout/Section'
import Slider from 'react-slick'
import styled from '@emotion/styled'
import Animation from '@/animation/Animation'
import Demo from '@/portfolio/Demo'
import Preview from "@/contact/Preview";
import useI18n from "../../hooks/use-i18n";

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

export default function Page({data}) {
    const i18n = useI18n();

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

export async function getStaticProps(context) {

    return {
        props: {
            data: cases.filter((data => cases.id === context.params.name))[0]
        }, // will be passed to the page component as props
    }
}

export async function getStaticPaths() {
    return {
        paths: [
            {params: {portfolio: "hes"}} // See the "paths" section below
        ],
        fallback: false // See the "fallback" section below
    };
}
