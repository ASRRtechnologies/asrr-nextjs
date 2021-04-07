import React from 'react';
import {Fade} from 'react-awesome-reveal'

function Title({title, className, subHeader, header}) {

    return (
        <div className={`title-wrapper ${className}`}>
            <Fade triggerOnce cascade damping={0.3} direction="up">
                <h4 className="primary-color">{subHeader}</h4>
                <h1>{title}</h1>
                <h2>{header}</h2>
            </Fade>
        </div>
    );
}

export default Title;

