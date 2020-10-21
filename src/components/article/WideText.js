import React from 'react';
import Animation from "@/animation/Animation";

function WideText(props) {
    let {title, text} = props
    return (
        <Animation animation="fade" className="wide-text margin-bottom-article-section">

            {title && <h2>{title}</h2>}

            {text && <p>{text}</p>}


        </Animation>
    );
}

export default WideText;