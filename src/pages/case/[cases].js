import React, {useContext, useEffect, useState} from 'react'
import {cases} from '../../data/cases'
import Section from '@/layout/Section'
import styled from '@emotion/styled'
import useI18n from '../../hooks/use-i18n'
import {AnimationContext} from '../../context/animations/AnimationContext'
import Landing from '../../components/landing/Landing'
import Title from '../../components/text/Title'
import Interweave, {Markup} from 'interweave'
import Animation from '../../components/animation/Animation'
import Slider from "react-slick";
import Chevron from "@/icons/Chevron";
import Contact from "@/contact/Preview";
import {useTheme} from "../../context/theme/ThemeContext";
import {languages} from "../../context/lib/i18n";

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

function Page({data, query}) {
    const i18n = useI18n()
    const animate = useContext(AnimationContext)
    const [bullets, setBulletPoints] = useState([])
    const [card, setCard] = useState(0)
    const darkmode = useTheme().dark;

    useEffect(() => {
        (animate.appLoaded) ? animate.animation.secondLoad() : null;
        setBulletPoints(i18n.t(data.bullets));
    }, []);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
        ],
    }

    return (
        <>
            <Landing/>
            <Wrapper className="section-wrapper">
                <Section>
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

                        </div>
                    </Animation>

                    <Animation animation="fade-up" delay="500">
                        <Title className="left-title no-margin" title={data.conclusion.title}
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
    let data = cases.find(data => data.id === query.cases);
    console.log(query)
    return {
        data,
        query
    }
};

export default Page

