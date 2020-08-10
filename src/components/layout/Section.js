import React from 'react';

function Section({children, className}) {
    return (
        <section className={`section ${className}`}>
                {children}
        </section>
    );
}

export default Section;
