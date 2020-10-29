import React from 'react';
import useI18n from '../../hooks/use-i18n'
import Fade from 'react-reveal/Fade';

function Title({text, title, className}) {
    const i18n = useI18n();
    return (
        <div className="title">
            <Fade>
                <h1>Title</h1>
                <h4>Small title</h4>
                <h2>We provide the best services you can ever think of let me check when this text will brek</h2>
            </Fade>
        </div>
    );
}

export default Title;

