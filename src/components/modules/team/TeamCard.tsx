import React, {useState} from 'react';
import cardStyles from "@/modules/team/cardStyles.module.scss";
import AspectRatio from "@/library/aspect-ratio/AspectRatio";
import Accordion from "@/library/accordion/Accordion";
import {Fade} from "react-awesome-reveal";
import ChevronRotatable from "@/icons/ChevronRotatable";
// @ts-ignore
import placeholder from "#/team/placeholder.png";

interface TeamCardProps {
    name: string,
    position: string,
    image?: string
    website?: string


}

function TeamCard(props) {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className={cardStyles.card}>
            <AspectRatio x={4} y={3}>
                <img src={props.image || placeholder} alt={props.alt}/>
            </AspectRatio>

            <div className={cardStyles.border}/>
            <div className={cardStyles.name}>
                {props.website ?
                    <a className="h4" href={props.website}>{props.name}</a>:
                    <p className="h4">{props.name}</p>
                }
                <ChevronRotatable rotate={collapsed} onClick={() => setCollapsed(!collapsed)} color={"black"}/>
            </div>

            <Accordion collapsed={collapsed}>
                <Fade duration={800}>
                    <h1>This is a collapse</h1>
                </Fade>
            </Accordion>

            <p className="h5">{props.position}</p>
        </div>
    );
}

export default TeamCard;
