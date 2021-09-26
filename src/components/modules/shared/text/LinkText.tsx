import Link from 'next/link';
import React from 'react';

interface LinkText {
    href: string,
    customLink: boolean,
    title: string,
    className?: string,

    [x: string]: any,
}

function LinkText({title = "", customLink, className, href, props}: LinkText) {
    return (
        <>
            {customLink ?
                <a  {...props} className={`hover-link ${className}`}>{title || "Lees Meer"}</a>
                :
                <Link href={href}>
                    <a {...props} className={`hover-link ${className}`}>{title || "Lees Meer"}</a>
                </Link>}
        </>
    );
}

LinkText.defaultProps = {
    title: null
};

export default LinkText;
