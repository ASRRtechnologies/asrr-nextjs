import React, {useContext, useEffect, useState} from 'react'
import {cases} from '../../../../data/cases'
import Section from '@/layout/Section'
import styled from '@emotion/styled'
import useI18n from '../../../../hooks/use-i18n'
import {AnimationContext} from '../../../../context/animations/AnimationContext'
import Landing from '@/landing/Landing'
import Title from '@/titles/Title'
import Interweave, {Markup} from 'interweave'
import Animation from '@/animation/Animation'
import Slider from "react-slick";
import Chevron from "@/icons/Chevron";
import {useTheme} from "../../../../context/theme/ThemeContext";
import Button from "@/Button";
import {motion} from "framer-motion";
import Application from "@/layout/Application";
import Layout from "@/layout/Layout";
import Contact from '@/contact/Preview'
import Fade from "react-reveal";

const Card = styled('div')`
        box-shadow: ${props => props.theme.card.shadow};
`;

function PrevArrow(props) {
    const {className, onClick} = props;
    return (<Chevron onClick={onClick} className={className}/>);
}

function NextArrow(props) {
    const {className, onClick} = props;
    return (<Chevron onClick={onClick} className={className}/>);
}

function Page({data, query}) {
    const i18n = useI18n();
    const animate = useContext(AnimationContext);
    const [bullets, setBulletPoints] = useState([]);
    const [slide, setActiveSlide] = useState(0);
    const [card, setCard] = useState(0);
    const darkmode = useTheme().dark;

    useEffect(() => {
        (animate.appLoaded) ? animate.animation.secondLoad() : null;
        setBulletPoints(i18n.t(data.bullets));
        window.scrollTo(0, 0);

    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        // beforeChange: (current, next) => setActiveSlide(next),
        afterChange: current => setActiveSlide(current)
    };

    return (
        <>
            <Application>
                <Layout>

                    <Landing title={data.landing.title} text={data.landing.text} client={data.landing.client}
                             discipline={data.landing.discipline}/>
                    <Section className="case-section">
                        <Fade bottom delay="300">
                            <Title className="justify" title={data.introduction.title} text={data.introduction.text}/>
                        </Fade>

                        <Fade bottom delay="500">
                            <div className="why-asrr margin-bottom ">
                                <div className="why-asrr-wrapper">
                                    <div className="why-asrr-points">
                                        {bullets.map((d, i) => {
                                            return (
                                                <span onClick={() => setCard(i)}
                                                      className={`${i === card && 'selected-line'} `}>
											<Interweave tagName="div"
                                                        attributes={{className: `${!darkmode ? "animated-link-dark-wrapper" : "animated-link-light-wrapper"}`}}
                                                        content={d.key} onClick={() => setCard(i)}/>
										</span>
                                            )
                                        })}
                                    </div>
                                    {bullets.map((d, i) => card === i
                                        ? <Markup attributes={{className: 'why-asrr-text'}} containerTagName="div"
                                                  content={d.value}/>
                                        : null)}
                                </div>
                            </div>
                        </Fade>

                        <Fade animation="fade-up" delay="500">
                            <Title className="justify" title={data.result.title} text={data.result.text}/>
                        </Fade>

                        <Fade>
                        <div className="project-carousel-wrapper" animation="fade-up" delay="500">
                            <Slider {...settings}>
                                {
                                    data.images.map((img, i) => {
                                        return (
                                            <Card className="project-image">
                                                <img src={img} alt="img"/>
                                            </Card>
                                        )
                                    })
                                }
                            </Slider>
                            <div className="project-carousel-indicator">
                                {data.images.map((d, i) => <div
                                    className={`${i === slide ? "active-indicator" : null}`}></div>)}
                            </div>
                        </div>
                        </Fade>

                        <Fade bottom animation="fade-up" delay="500">
                            <Title className="regular" title={data.conclusion.title}
                                   text={data.conclusion.text}/>
                        </Fade>

                        <Fade bottom animation="fade-up" delay="500">
                            <Contact className="last-section-padding"/>
                        </Fade>
                    </Section>
                </Layout>
            </Application>
        </>
    )
}

Page.getInitialProps = ({query}) => {
    let data = cases.find(data => data.id === query.case);
    return {
        data,
        query
    }
};

export default Page

