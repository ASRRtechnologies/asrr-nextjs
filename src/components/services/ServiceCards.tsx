import React from 'react'
import LinkText from "@/modules/shared/text/LinkText";

function ServiceCards({content, basePath}) {
    const {title, text} = content.card;
    const url = content.title;

    return (
        <div>
            <h1 className="h3">{title}</h1>
            <p style={{maxWidth: "400px"}}>{text}</p>
            <LinkText classes="bold lees-meer" customLink={false} href={`/diensten/${url}`} title={null}/>
        </div>
    )
}

export default ServiceCards
