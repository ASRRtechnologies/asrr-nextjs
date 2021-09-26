import React from 'react';
import cardStyles from "@/modules/portfolio/cardStyles.module.scss";
// @ts-ignore
import img from "#/landing/placeholder.jpg";
import Link from "next/link";
import Section from "@/modules/shared/section/Section";
import {PortfolioHighlightProps} from "@/modules/portfolio/types";
import Reveal, {Fade} from "react-awesome-reveal";
import Filter from "@/modules/shared/section/Filter";
import {bannerAnimations, textAnimations, zoomIn} from "../../../data/animations-settings";

function PortfolioHighlight(props: PortfolioHighlightProps) {
    const {content, basePath} = props;
    return (
        <div className="global-padding-vertical">
            <Section className={`${cardStyles.highlight} ${props.left && cardStyles.highlightLeft}`}>
                <Filter opacity={0.5}/>

                <Reveal keyframes={zoomIn} {...bannerAnimations} className="image-zoom-animation">
                    <img src={`${basePath}/${content.image}`} alt={content.alt}/>
                </Reveal>

                <div className={cardStyles.highlightCard}>
                    <div className={cardStyles.highlightCardInner}>
                        <Fade {...textAnimations}>
                            <h1 className="h2 primary-color">{content.title}</h1>
                            <p>{content.text}</p>

                            <Link href={`/portfolio/cases/`}>
                                <a className="lees-meer bold hover-link">Lees meer</a>
                            </Link>
                        </Fade>
                    </div>
                </div>

            </Section>
        </div>
    );
}

export default PortfolioHighlight;
