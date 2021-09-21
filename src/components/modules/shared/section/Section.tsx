import React from 'react';
import sectionStyles from "./section.module.scss";

interface SectionProps {
    className?: string,
    children: React.ReactElement | React.ReactElement[],

    [x: string]: any,
}

function Section(props: SectionProps) {
    const {children, className} = props;

    return (
        <section className={`${className} ${sectionStyles.section} global-padding-horizontal global-padding-vertical`} {...props}>
            {children}
        </section>
    );
}

export default Section;
