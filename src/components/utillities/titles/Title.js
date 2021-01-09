import React from 'react';
import useI18n from '../../../hooks/use-i18n'
import { Fade } from 'react-awesome-reveal'

function Title({title, className, subHeader, header}) {

    return (
        <div className={`title-wrapper ${className}`}>
            <Fade triggerOnce cascade damping={0.3} direction="up">
                     <h1 className="font-title">{title}</h1>
                     <h2 className="font-general">{subHeader}</h2>
                    <h3 className="font-header">{header}</h3>
             </Fade>
        </div>
    );
}

export default Title;

