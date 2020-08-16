import React from 'react';

function Section({children, className}) {
    return (
        <section className="section-wrapper">
            <div className={`section ${className}`}>
                {children}
            </div>
        </section>
    );
}

export default Section;
