import Link from 'next/link';
import React from 'react';
import styledLink from "./link.module.scss";
import {useTheme} from "../../../../context/theme/ThemeContext";

interface LinkTextProps {
    href: string,
    customLink: boolean,
    title: string,
    classes?: string,
    goToSection?: boolean

    [x: string]: any,
}

function LinkText(props: LinkTextProps) {
    const darkmode = useTheme().dark;
    const {title = "", customLink, classes, goToSection, href} = props;

    return (
        <>
            {customLink ?
                <a className={`${classes} ${darkmode ? styledLink.linkDark : styledLink.linkLight}`} {...props}>{title || "Lees Meer"}</a>
                :
                <Link href={href}>
                    <a className={`
                        ${classes} 
                        ${darkmode ? styledLink.linkDark : styledLink.linkLight}
                        ${goToSection && `h4 ${styledLink.goToSection}`}    
                    `}
                       {...props}>{title || "Lees Meer"}
                    </a>
                </Link>}
        </>
    );
}

LinkText.defaultProps = {
    title: null,
    goToSection: false
};

export default LinkText;