import React from 'react';

function Section({children, className, containerClassName, id}) {
    return (
        <section id={id} className={`section-wrapper ${containerClassName}`}>
            <div className={`section ${className}`}>
                {children}
            </div>
        </section>
    );
}

export default Section;
