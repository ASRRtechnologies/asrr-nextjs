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

    return (
        <div className="global-padding-vertical">
            <Section className={`${cardStyles.highlight} ${props.left && cardStyles.highlightLeft}`}>
                <Filter opacity={0.5}/>

                <Reveal keyframes={zoomIn} {...bannerAnimations} className="image-zoom-animation">
                    <img src={img}/>
                </Reveal>

                <div className={cardStyles.highlightCard}>
                    <div className={cardStyles.highlightCardInner}>
                        <Fade {...textAnimations}>
                            <h1 className="h2 primary-color">A new data economy</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet deleniti eius eum
                                fugiat
                                nihil
                                rem totam! Alias aliquid amet aut eligendi incidunt, magnam nostrum nulla quis tempore
                                totam
                                voluptate!</p>

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
