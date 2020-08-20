import React from 'react';
import useI18n from '../../hooks/use-i18n'
import Interweave from "interweave";

function Title({text, title, className}) {
    const i18n = useI18n();
    return (
        <div className={`title ${className}`}>
            <h1>
                {title ? i18n.t(title) : null}
            </h1>
	        <Interweave tagName="p"
	                    content={text ? i18n.t(text) : null}/>
        </div>
    );
}

export default Title;

