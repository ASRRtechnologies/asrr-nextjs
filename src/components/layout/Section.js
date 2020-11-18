import React from 'react';

function Section({children, className, id, style}) {
    return (
        <section style={style} id={id} className={`section ${className ? className : ""}`}>
                {children}
        </section>
    );
}

export default Section;
