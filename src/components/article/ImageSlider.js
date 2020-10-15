import React, {useState} from 'react';
import Chevron from "@/icons/Chevron";
import Slider from "react-slick";
import image from "../../../public/assets/images/erik-mclean-ZRns2R5azu0-unsplash.jpg"
import Animation from "@/animation/Animation";

function ImageSlider({square}) {

    const [slide, setActiveSlide] = useState(0);
    const [card, setCard] = useState(0);

    function PrevArrow(props) {
        const {className, onClick} = props;
        return (<Chevron onClick={onClick} className={className}/>);
    }

    function NextArrow(props) {
        const {className, onClick} = props;
        return (<Chevron onClick={onClick} className={className}/>);
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        afterChange: current => setActiveSlide(current)
    };

    const data = [{}, {}];

    return (
        <div className={`${square ? "slider-square-image" : "slider-wide-image"} slider margin-bottom-text-section`}>
            <Slider {...settings}>
                {
                    data.map((img, i) => {
                        return (
                            <div className="aspect-ratio-container">
                                <div className={`aspect-ratio-wrapper ${square ? "square-width-aspect-ratio" : "full-width-aspect-ratio"}`}>
                                     <img src={image} alt="img"/>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>

            <div className="slider-indicator">
                {data.map((d, i) => <div className={`${i === slide ? "active-indicator" : null}`}/>)}
            </div>

        </div>
    );
}

export default ImageSlider;