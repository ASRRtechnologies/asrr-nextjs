import React from 'react';
import useI18n from '../../hooks/use-i18n'
import Fade from 'react-reveal/Fade';

function Title({title, className, subHeader, header}) {

    return (
        <div className={`title-wrapper ${className}`}>
            <Fade bottom>
                <>
                    <h1 className="font-title">{title}</h1>
                    {subHeader && <h2 className="font-subheader">{subHeader}</h2>}
                    {header && <h3 className="font-header">{header}</h3>}
                </>
            </Fade>
        </div>
    );
}

export default Title;

