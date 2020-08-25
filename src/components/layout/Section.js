import React from 'react';

function Section({children, className, containerClassName}) {
    return (
        <section className={`section-wrapper ${containerClassName}`}>
            <div className={`section ${className}`}>
                {children}
            </div>
        </section>
    );
}

export default Section;
