import React from 'react';

function Section({children, className}) {
    return (
        <div className={`section ${className}`}>
                {children}
        </div>
    );
}

export default Section;
