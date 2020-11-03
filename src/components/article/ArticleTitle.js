import React from 'react';
import useI18n from '../../hooks/use-i18n'
import Fade from 'react-reveal/Fade';

function ArticleTitle({smallTitle, title, subtitle}) {

    return (
        <div className="article-title-wrapper">
            <Fade>
                <>
                    {smallTitle && <h1 className="article-title-label">{smallTitle}</h1>}
                    {title && <h2 className="article-title">{title}</h2>}
                    {subtitle && <h3 className="article-subtitle">{subtitle}</h3>}
                </>
            </Fade>
        </div>
    );
}

export default ArticleTitle;

