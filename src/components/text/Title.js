import React from 'react';
import useI18n from '../../hooks/use-i18n'

function Title({text, title}) {
    const i18n = useI18n();
    return (
        <div className="title">
            <h2>{i18n.t(title)}</h2>
            <p>
                {i18n.t(text)}
            </p>
        </div>
    );
}

export default Title;

