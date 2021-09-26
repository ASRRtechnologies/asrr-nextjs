import React from 'react';
import cardStyles from "@/modules/shared/cards/generalCard.module.scss";
import AspectRatio from "@/library/aspect-ratio/AspectRatio";
// @ts-ignore
import placeholder from "#/team/placeholder.png";
import {PortfolioCardProps} from "@/modules/portfolio/types";
import Link from "next/link";
import {useRouter} from "next/router";
import LinkText from "../shared/text/LinkText";

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

            <h1 className="h5">{client}</h1>

            <h2 className="h4">{title}</h2>

            <div className={cardStyles.text}>
                <p>{text}</p>
                <LinkText href={`/portfolio/cases/${projectName}`} customLink={false} className="bold lees-meer"/>
            </div>

            <div className={cardStyles.tags}>
                {tags?.map((tag) => {
                    return (
                        <Link href={`/portfolio`}>
                            <a className="h6">{tag}</a>
                        </Link>
                    )
                })}
            </div>
        </div>
    );
}

export default PortfolioCard;
