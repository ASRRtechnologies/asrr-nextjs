import React from 'react';

function Title({text, title}) {
    return (
        <div className="title">
            <h2>
                {title}
            </h2>

            <p>
                {text}
            </p>

        </div>
    );
}

export default Title;