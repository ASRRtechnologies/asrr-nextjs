import React from 'react';
import {Fade} from 'react-awesome-reveal'

function Title({className, title, text}) {

    return (
        <div className={`title-wrapper ${className}`}>
            <Fade delay={300} triggerOnce={true}>
                <h1 className="h2 primary-color">{title}</h1>
                <h2 className="h3 not-bold">{text}</h2>
            </Fade>
        </div>
    );
}

export default Title;

