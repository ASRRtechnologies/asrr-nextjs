import React from 'react';
import useI18n from '../../hooks/use-i18n'
import Fade from 'react-reveal/Fade';

function ArticleTitle({compact, noSection, basePath, id}) {
    const i18n = useI18n();
    const title = `${basePath}.title`;
    const smallTitle = `${basePath}.smallTitle`;
    const text = `${basePath}.text`;

    return (
        <div className="article-title-wrapper">
            <Fade>
                <>
                    {!noSection && <h1 className="article-title-label">{i18n.t(smallTitle) !== undefined ? i18n.t(smallTitle) : smallTitle}</h1>}
                    {<h2 className="article-title">{i18n.t(title) !== undefined ? i18n.t(title) : title}</h2>}
                    {!compact && <h3 className="article-subtitle">{i18n.t(text) !== undefined ? i18n.t(text) : text}</h3>}
                </>
            </Fade>
        </div>
    );
}

export default ArticleTitle;

