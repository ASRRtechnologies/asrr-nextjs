import React, {useState} from 'react';
import cardStyles from "@/modules/shared/cards/cards.module.scss";
import AspectRatio from "@/library/aspect-ratio/AspectRatio";
import Accordion from "@/library/accordion/Accordion";
import {Fade} from "react-awesome-reveal";
import ChevronRotatable from "@/icons/ChevronRotatable";
// @ts-ignore
import placeholder from "#/team/placeholder.png";

interface TeamCardProps {
    name: string,
    position: string,
    image?: string,
    basePath?: string,
    website?: string
    story: string
    alt?: string
}

function TeamCard(props: TeamCardProps) {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className={`${cardStyles.card} ${cardStyles.teamCard}`}>
            <AspectRatio x={4} y={3}>
                <img src={props.image? `${props.basePath}/${props.image}` : placeholder} alt={props?.alt}/>
            </AspectRatio>

            <div className={cardStyles.border}/>

            <div className={cardStyles.name}>
                {props.website ?
                    <a className="h4 hover-link" href={props.website} target="_blank" rel="noopener">{props.name}</a>:
                    <p className="h4">{props.name}</p>
                }
                <ChevronRotatable rotate={collapsed} onClick={() => setCollapsed(!collapsed)} color={"black"}/>
            </div>

            <Accordion collapsed={collapsed}>
                <Fade duration={800}>
                    <p>{props.story}</p>
                </Fade>
            </Accordion>

            <p className="h5">{props.position}</p>
        </div>
    );
}

export default TeamCard;
