import React, {useRef, useState} from 'react';
import Chevron from "@/icons/Chevron";
import Slider from "react-slick";
import image from "../../../public/assets/images/erik-mclean-ZRns2R5azu0-unsplash.jpg"
import Animation from "@/animation/Animation";
import styled from "@emotion/styled";

const SliderIndicators = styled('div')`
              background-color: ${props => props.theme.fonts.paragraph}}
              &:hover{background-color: #ff6961;}
`;

function ImageSlider({square}) {

    const [activeSlide, setActiveSlide] = useState(0);
    const sliderRef = useRef(null);

    const [card, setCard] = useState(0);

    function PrevArrow(props) {
        const {className, onClick} = props;
        return (<Chevron onClick={onClick} className={className}/>);
    }

    function NextArrow(props) {
        const {className, onClick} = props;
        return (<Chevron onClick={onClick} className={className}/>);
    }

    const goToClickedSlide = (i) =>{
        setActiveSlide(i);
        sliderRef.current.slickGoTo(i);
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        afterChange: current => setActiveSlide(current),
        slickGoTo: activeSlide || 0
    };

    const data = [{}, {}];

    return (
        <Animation animation="fade" className={`${square ? "slider-square-image" : "slider-wide-image"} slider margin-bottom-article-section`}>
            <Slider ref={slider => (sliderRef.current = slider)}  {...settings}>
                {
                    data.map((img, i) => {
                        return (
                            <div className="aspect-ratio-container">
                                <div
                                    className={`aspect-ratio-wrapper ${square ? "square-width-aspect-ratio" : "full-width-aspect-ratio"}`}>
                                    <img src={image} alt="img"/>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>

            <div className="slider-indicator-wrapper">
                {data.map((d, i) => <SliderIndicators onClick={() => goToClickedSlide(i)}
                                         className={`slider-indicator ${i === activeSlide ? "active-indicator" : null}`}/>)}
            </div>

        </Animation>
    );
}

export default ImageSlider;