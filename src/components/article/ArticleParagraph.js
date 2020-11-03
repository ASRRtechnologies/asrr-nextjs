import React from 'react';
import useI18n from "../../hooks/use-i18n";
import Fade from "react-reveal";

function ArticleParagraph(props) {
    let {title, titleText, text} = props
    let i18n = useI18n();
    return (
        <Fade>
            <div className="article-paragraph">
                {title && <h1 className="subheader">{title}</h1>}
                {text && <p className="text">{text}</p>}
            </div>
        </Fade>
    );
}

export default ArticleParagraph;
