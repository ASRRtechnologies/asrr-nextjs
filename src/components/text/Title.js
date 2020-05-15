import React from 'react';

function Title({text, title, big}) {
    return (
        <div className="title">
            {big ? (<h1>{title}</h1>) : (<h2>{title}</h2>)}
            <p>
                {text}
            </p>
        </div>
    );
}

export default Title;