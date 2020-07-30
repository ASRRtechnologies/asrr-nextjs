import React from 'react';
import useI18n from '../../hooks/use-i18n'

function Title({text, title, className}) {
    const i18n = useI18n();
    return (
        <div className={`title ${className}`}>
            <h2>
                {title ? i18n.t(title) : null}
            </h2>
            <p>
                {text ? i18n.t(text) : null}
            </p>
        </div>
    );
}

export default Title;

