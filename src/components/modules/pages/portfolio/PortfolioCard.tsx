import React from 'react';
import cardStyles from "@/modules/shared/cards/cards.module.scss";
import AspectRatio from "@/library/aspect-ratio/AspectRatio";
// @ts-ignore
import placeholder from "#/team/placeholder.png";
import {PortfolioCardProps} from "@/modules/pages/portfolio/types";
import Link from "next/link";
import {useRouter} from "next/router";
import LinkText from "../../shared/text/LinkText";
import Tag from "../../shared/text/Tag";

function PortfolioCard(props: PortfolioCardProps) {
    const projectName = props.title;
    const {image, alt, title, text} = props.card;
    const {client, date, author, tags} = props.info;
    const router = useRouter();
    const goToCase = () => router.push(`/portfolio/cases/${projectName}`);

    return (
        <div className={cardStyles.card} onClick={goToCase}>
            <AspectRatio x={4} y={3}>
                <img src={image ? `${props.basePath}/${image}` : placeholder} alt={alt}/>
            </AspectRatio>
            <div className={cardStyles.border}/>

            <h1 className="h5 not-bold">{client}</h1>

            <h2 className="h4">{title}</h2>

            <div className={cardStyles.text}>
                <p className="no-margin">{text}</p>
                <LinkText href={`/portfolio/cases/${projectName}`} customLink={false} classes="bold lees-meer" title={null}/>
            </div>

            <div className={cardStyles.tags}>
                {tags?.map((tag) =><Tag href={`/portfolio`} customLink={false} className="h6" title={tag}/>)}
            </div>
        </div>
    );
}

export default PortfolioCard;
