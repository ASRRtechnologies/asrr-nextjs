import React from 'react';
import useI18n from '../../hooks/use-i18n'
import Fade from 'react-reveal/Fade';
import Animation from "@/animation/Animation";

function Title({compact, basePath, id}) {
    const i18n = useI18n();
    const title = `${basePath}.${id}.title`;
    const smallTitle = `${basePath}.${id}.smallTitle`;
    const text = `${basePath}.${id}.text`;

    return (
        <div className="title">
            <Fade>
                <>
                    {<h1>{i18n.t(title) !== undefined ? i18n.t(title) : title}</h1>}
                    {!compact && <h4>{i18n.t(smallTitle) !== undefined ? i18n.t(smallTitle) : smallTitle}</h4>}
                    {<h2>{i18n.t(text) !== undefined ? i18n.t(text) : text}</h2>}
                </>
            </Fade>
        </div>
    );
}

export default Title;

