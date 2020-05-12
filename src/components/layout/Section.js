import React from 'react';

function Section({children, className}) {
    return (
        <div className="section">
                {children}
        </div>
    );
}

export default Section;
