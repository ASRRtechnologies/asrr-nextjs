import React, {useContext, useEffect, useState} from 'react'
import {cases} from '../../../data/cases'
import Section from '@/layout/Section'
import styled from '@emotion/styled'
import useI18n from '../../../hooks/use-i18n'
import {AnimationContext} from '../../../context/animations/AnimationContext'
import Landing from '@/landing/ClientLanding'
import Title from '@/text/Title'
import Interweave, {Markup} from 'interweave'
import Animation from '@/animation/Animation'
import Slider from "react-slick";
import Chevron from "@/icons/Chevron";
import {useTheme} from "../../../context/theme/ThemeContext";
import Button from "@/Button";
import {motion} from "framer-motion";

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

const textEasing = [.42, 0, .58, 1];
const fadeOut = {

    show: {
        opacity:1,
        transition: {
            ease: textEasing,
            duration:1
        }
    },
    hidden: {
        translateY: "100px",
        opacity:0,
        transition: {
            duration: 1,
            ease: textEasing,
        }
    }
}

function Contact({className, title}) {
    return (
        <div className={`contact preview ${title}`}>
            <Title className={`${title} title-button`} title={'contact.preview.title.header'}
                   text={'contact.preview.title.text'}/>
            <Button custom to="/contact" title="buttons.contact"/>
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
    }

    return (
        <>
            <motion.div initial={"show"} exit="hidden" animate="show" variants={fadeOut} className="content-wrapper">
                <Landing title={data.landing.title} text={data.landing.text} client={data.landing.client}
                         discipline={data.landing.discipline}/>
                <Section className="">
                    <Animation animation="fade-up" delay="300">
                        <Title className="justify" title={data.introduction.title} text={data.introduction.text}/>
                    </Animation>

                    <Animation animation="fade" delay="500">
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
                    </Animation>

                    <Animation animation="fade-up" delay="500">
                        <Title className="justify" title={data.result.title} text={data.result.text}/>
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
                            {data.images.map((d, i) => <div
                                className={`${i === slide ? "active-indicator" : null}`}></div>)}
                        </div>
                    </Animation>

                    <Animation animation="fade-up" delay="500">
                        <Title className="" title={data.conclusion.title}
                               text={data.conclusion.text}/>
                    </Animation>

                    <Animation animation="fade-up" delay="500">
                        <Contact title=""/>
                    </Animation>
                </Section>
            </motion.div>
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

