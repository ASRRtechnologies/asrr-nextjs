import React from 'react'
import Section from '../layout/Section'
import Title from '../titles/Title'
import automation from '#/services/automation/automation-square.jpg'
import analytics from '#/services/data-analytics/data-analytics-square.jpg'
import scale from '#/services/scaleable-software/scaleable-software-sqaure.jpg'
import Fade from 'react-reveal/Fade';

const Card = ({image, text, title, to}) => {

    return (
        <Fade bottom>
            <div className="service-card">
                <div className="service-card-text">
                    <div className="service-card-text-wrapper">
					<span>
						<h2>Scaleable Software </h2>
						<p>This is a text for you to see how far the button can
						actually render if i try and some more random text to display on this page</p>
                        {/*<Button to="/"/>*/}
					</span>
                    </div>
                </div>

                <div className="service-card-image">
                    <div className="service-card-image-wrapper">
                        <img src={image} alt="services-alt"/>
                    </div>
                </div>
            </div>
        </Fade>
    )


};

function Services() {


    return (
        <Section id="services">
            <Title basePath={'services.preview.header'}/>
            <div className="services">
                <Card image={automation}/>
                <Card image={analytics}/>
                <Card image={scale}/>
            </div>

        </Section>
    )
}

export default Services
