import React from 'react'
import LinkText from "@/modules/shared/text/LinkText";

function ServiceCards({content, basePath}) {
    const {image, alt, title, text} = content;

    return (
        <div>
            <h1 className="h3">{title}</h1>
            <p style={{maxWidth:"400px"}}>{text}</p>

            <LinkText customLink={false} href={`/diensten/${title}`} title={null}/>
        </div>
    )
}

export default ServiceCards
