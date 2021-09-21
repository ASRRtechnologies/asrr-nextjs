import React from 'react';
import cardStyles from "@/modules/portfolio/cardStyles.module.scss";
import AspectRatio from "@/library/aspect-ratio/AspectRatio";
// @ts-ignore
import placeholder from "#/team/placeholder.png";
import {PortfolioCardProps} from "@/modules/portfolio/types";
import Link from "next/link";

function BlogCard(props: PortfolioCardProps) {
    const projectName = props.title;
    const {image, alt, title, text} = props.card;
    const {client, date, author, tag, technologies} = props.info;

    return (
        <div className={cardStyles.card}>
            <AspectRatio x={4} y={3}>
                <img src={image ? `${props.basePath}/${image}` : placeholder} alt={alt}/>
            </AspectRatio>
            <div className={cardStyles.border}/>

            <h1 className="h5 not-bold">{date}</h1>

            <h2 className="h4">{title}</h2>

            <div className={cardStyles.text}>
                <p>{text}</p>
                <Link href={`/portfolio/${projectName}`}>
                    <a className="bold">Lees meer</a>
                </Link>
            </div>

            <div className={cardStyles.tags}>
                {tag.map(({tag}) => {
                    return (
                        <Link href={`/portfolio`}>
                            <a className="h6">{tag}</a>
                        </Link>
                    )
                })}
                {/*{technologies?.map(({technologies}) => <Link href="/portfolio"><a className="h5">{technologies}</a> </Link>)}*/}
            </div>
        </div>
    );
}

export default BlogCard;
