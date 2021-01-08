import React from 'react';
import Section from "@/layout/Section";
import Title from "@/titles/Title";
import ReadMore from "@/text/ReadMore";
import styled from "@emotion/styled";
import PictureFallback from "@/titles/PictureFallback";
import Fade from "react-reveal/Fade";

const Wrapper = styled(Section)`
        background: ${props => props.theme.home.services};
 }`;

function Preview({data, basePath}) {

    return (
        <Wrapper>

            <Title title={data.title} header={data.header} subHeader={data.subheader}/>

            <div className="services-preview">
                {data.services.map(({image, alt, image_webp, title, text}) => {
                    return (
                        <Fade bottom delay={200}>
                            <div className="service-preview-card card-margin-bottom">

							<span className="service-preview-card-image">
                                <PictureFallback image={`${basePath}/${image_webp}`}
                                                 fallbackImage={`${basePath}/${image}`} alt={alt}/>
							</span>

                                <h1 className="theme-font font-card-title">{title}</h1>
                                <p className="font-general">{text}</p>
                            </div>
                        </Fade>
                    )
                })}

            </div>

            <div className="read-more-wrapper">
                <ReadMore className="subheader" to="/services" text={data.button}/>
            </div>

        </Wrapper>
    );
}

export default Preview;
