import React from 'react';
import {Fade} from 'react-awesome-reveal'

function Title({title, className, subHeader, header}) {

    return (
        <div className={`title-wrapper ${className}`}>
            <Fade delay={300}>
                <h1 className="h2 primary-color">{subHeader}</h1>
                <h2 className="h3">{header}</h2>
            </Fade>
        </div>
    );
}

export default Title;

