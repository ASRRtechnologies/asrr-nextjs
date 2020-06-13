import React from 'react';
import useI18n from '../../hooks/use-i18n'

function Title({text, title, big}) {
    const i18n = useI18n()
    return (
        <div className="title">
            {big ? (<h1>{i18n.t(title)}</h1>) : (<h2>{i18n.t(title)}</h2>)}
            <p>
                {i18n.t(text)}
            </p>
        </div>
    );
}

export default Title;
