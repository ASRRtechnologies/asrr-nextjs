import React from 'react';
import useI18n from "../../hooks/use-i18n";
import Fade from "react-reveal";

function ArticleParagraph(props) {
    let {title, text} = props
    let i18n = useI18n();
    return (
        <Fade>
            <div className="article-paragraph">
                {title && <h1 className="subheader">{i18n.t(title) !== undefined ? i18n.t(title) : title}</h1>}
                {text && <p className="text">{i18n.t(text) !== undefined ? i18n.t(text) : text}</p>}
            </div>
        </Fade>
    );
}

export default ArticleParagraph;
