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

const Wrapper = styled('div')`
      background-image: ${props => props.theme.layout};
`;

const Card = styled('div')`
        box-shadow: ${props => props.theme.card.shadow};
`;

function PrevArrow(props) {
	const {className, onClick } = props;
	return ( <Chevron onClick={onClick} className={className}/>);
}

function NextArrow(props) {
	const {className,  onClick } = props;
	return ( <Chevron onClick={onClick} className={className}/>);
}

function Page({data}) {
    const i18n = useI18n()
    const animate = useContext(AnimationContext)
    const [bullets, setBulletPoints] = useState([])
    const [card, setCard] = useState(0)

    useEffect(() => {
        // (animate.appLoaded) ? animate.animation.secondLoad() : null
        setBulletPoints(i18n.t(data.bullets))
    }, [])

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
                    <Title className="left-title" title={data.introduction.title} text={data.introduction.text}/>

                    <div className="why-asrr margin-bottom why-asrr-left">
                        <div className="why-asrr-wrapper">
                            <div className="why-asrr-points" style={{gridTemplateColumns:`repeat(${bullets.length}, 1fr)`}}>
                                {bullets.map((d, i) => {
                                    return (
                                        <span onClick={() => setCard(i)}
                                              className={`${i === card && 'selected-line'} why-asrr-left`}>
											<Interweave tagName="fragment" content={d.key} onClick={() => setCard(i)}
                                                        className={`${i === card && 'selected-line'}`}/>
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

                    <Title className="left-title" title={data.result.title} text={data.result.text}/>

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

					<Title className="left-title" title={data.conclusion.title} text={data.conclusion.text}/>

				</Section>
            </Wrapper>
        </>
    )
}

Page.getInitialProps = ({query}) => {
    let data = cases.find(data => data.id === query.portfolio)
    console.log(data)
    return {
        data,
    }
}

export default Page

