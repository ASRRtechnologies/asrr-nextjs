import React from 'react';
import cardStyles from "@/modules/portfolio/cardStyles.module.scss";
// @ts-ignore
import img from "#/landing/placeholder.jpg";
import Section from "@/modules/shared/section/Section";
import {PortfolioHighlightProps} from "@/modules/portfolio/types";
import Reveal, {Fade} from "react-awesome-reveal";
import Filter from "@/modules/shared/section/Filter";
import {bannerAnimations, textAnimations, zoomIn} from "../../../data/animations-settings";
import LinkText from "../shared/text/LinkText";

function PortfolioHighlight(props: PortfolioHighlightProps) {
    const projectName = props.title;
    const {image, alt, title, text} = props.card;
    const {client, date, author, tags} = props.info;
    return (
        <div className="global-padding-vertical">
            <Section className={`${cardStyles.highlight} ${props.reverse && cardStyles.highlightLeft}`}>
                <Filter opacity={0.5}/>

                <Reveal keyframes={zoomIn} {...bannerAnimations} className="image-zoom-animation">
                    <img src={`${props.basePath}/${image}`} alt={alt}/>
                </Reveal>

                <div className={cardStyles.highlightCard}>
                    <div className={cardStyles.highlightCardInner}>
                        <Fade {...textAnimations}>
                            <h1 className="h2 primary-color">{title}</h1>
                            <p>{text}</p>

                            {/*Extra fragment because fade messes with link styling*/}
                            <>
                                <LinkText href={`/portfolio/cases/${projectName}`} customLink={false}
                                          classes="bold lees-meer" title={null}/>
                            </>
                        </Fade>
                    </div>
                </div>

            </Section>
        </div>
    );
}

export default PortfolioHighlight;
