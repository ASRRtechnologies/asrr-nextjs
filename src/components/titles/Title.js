import React from 'react';
import useI18n from '../../hooks/use-i18n'
import Fade from 'react-reveal/Fade';

function Title({compact, noSection, basePath, className, id}) {
    const i18n = useI18n();
    const title = `${basePath}.title`;
    const smallTitle = `${basePath}.smallTitle`;
    const text = `${basePath}.text`;

    return (
        <div className={`title-wrapper ${className}`}>
            <Fade bottom>
                <>
                    {<h1 className="title">{i18n.t(title) !== undefined ? i18n.t(title) : title}</h1>}
                    {!noSection && <h2 className="title-label">{i18n.t(smallTitle) !== undefined ? i18n.t(smallTitle) : smallTitle}</h2>}
                    {!compact && <h3 className="subtitle">{i18n.t(text) !== undefined ? i18n.t(text) : text}</h3>}
                </>
            </Fade>
        </div>
    );
}

export default Title;

