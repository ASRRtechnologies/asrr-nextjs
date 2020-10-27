import React from 'react';
import Animation from "@/animation/Animation";
import i18n from "../../context/lib/i18n";
import useI18n from "../../hooks/use-i18n";

function WideText(props) {
    let {title, text} = props
    let i18n = useI18n();
    return (
        <Animation animation="fade" className="wide-text margin-bottom-article-section">

            {title && <h2>{i18n.t(title) !== undefined ? i18n.t(title) : title}</h2>}

            {text && <p>{i18n.t(text) !== undefined ? i18n.t(text) : text}</p>}

        </Animation>
    );
}

export default WideText;