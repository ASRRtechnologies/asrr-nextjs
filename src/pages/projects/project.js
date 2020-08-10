import React, {useContext, useEffect, useState} from 'react'
import {projects} from '../../data/projects'
import Section from '@/layout/Section'
import styled from '@emotion/styled'
import useI18n from '../../hooks/use-i18n'
import {AnimationContext} from '../../context/animations/AnimationContext'
import Landing from '@/landing/ClientLanding'
import Title from '../../components/text/Title'
import Interweave, {Markup} from 'interweave'
import Animation from '../../components/animation/Animation'
import Slider from "react-slick";
import Chevron from "@/icons/Chevron";
import {useTheme} from "../../context/theme/ThemeContext";
import Button from "@/Button";

const Wrapper = styled('div')`
      background-image: ${props => props.theme.layout};
`;

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

function Contact({className, title}) {
    return (
                <div className={`contact preview ${title}`}>
                    <Title className={`${title} title-button`} title={'contact.preview.title.header'} text={'contact.preview.title.text'}/>
                    <Button custom to="/contact" title="Let's Get In Touch"/>
                </div>
    )
}

function Page({data, query}) {
    const i18n = useI18n()
    const animate = useContext(AnimationContext)
    const [bullets, setBulletPoints] = useState([])
    const [slide, setActiveSlide] = useState(0)
    const [card, setCard] = useState(0)
    const darkmode = useTheme().dark;

    useEffect(() => {
        (animate.appLoaded) ? animate.animation.secondLoad() : null;
        setBulletPoints(i18n.t(data.bullets));
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
    }

    return (
        <>
            <Landing title={data.landing.title} text={data.landing.text} client={data.landing.client} discipline={data.landing.discipline}/>
            <Wrapper className="section-wrapper">
                <Section className="project-page">
                    <Animation animation="fade-up" delay="300">
                        <Title className="left-title" title={data.introduction.title} text={data.introduction.text}/>
                    </Animation>

                    <Animation animation="fade" delay="500">
                        <div className="why-asrr margin-bottom why-asrr-left">
                            <div className="why-asrr-wrapper">
                                <div className="why-asrr-points">
                                    {bullets.map((d, i) => {
                                        return (
                                            <span onClick={() => setCard(i)}
                                                  className={`${i === card && 'selected-line'} why-asrr-left`}>
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
                    </Animation>

                    <Animation animation="fade-up" delay="500">
                        <Title className="left-title" title={data.result.title} text={data.result.text}/>
                    </Animation>

                    <Animation className="project-carousel-wrapper" animation="fade-up" delay="500">
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
                            {data.images.map((d, i ) => <div className={`${i === slide ? "active-indicator": null}`}> </div>)}
                        </div>
                    </Animation>

                    <Animation animation="fade-up" delay="500">
                        <Title className="left-title" title={data.conclusion.title}
                               text={data.conclusion.text}/>
                    </Animation>

                    <Animation animation="fade-up" delay="500">
                        <Contact title="left-title"/>
                    </Animation>
                </Section>
            </Wrapper>
        </>
    )
}

// export async function getStaticProps({ params }) {
//     const { default: lngDict = {} } = await import(
//         `../../locales/${params.lng}.json`
//         );
//
//     return {
//         props: { lng: params.lng, lngDict },
//     }
// }
//
// export async function getStaticPaths() {
//     return {
//         paths: languages.map((l) => ({ params: { lng: l } })),
//         fallback: false,
//     }
// }

Page.getInitialProps = ({query}) => {
    let data = projects.find(data => data.id === query.cases);
    console.log(query)
    return {
        data,
        query
    }
};

export default Page

