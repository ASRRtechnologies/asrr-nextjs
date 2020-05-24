import React from 'react';

function Section({children, className}) {
    return (
        <section className="section">
                {children}
        </section>
    );
}

export default Section;
