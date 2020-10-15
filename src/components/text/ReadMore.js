import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'
import {useTheme} from '../../context/theme/ThemeContext'
import useI18n from "../../hooks/use-i18n";
import Animation from "@/animation/Animation";

const LinkText = styled('a')`
         color: ${props => props.inverted ? props.theme.fonts.white : props.theme.fonts.title} ;
        &:before{
          background-color: ${props => props.inverted ? props.theme.fonts.white : props.theme.fonts.title} ;
        }
`;

function ReadMore({to, inverted, text, children, noAnimation, className, ...rest}) {
    const i18n = useI18n();
    const darkmode = useTheme().dark;

    return (
        <Animation animation={noAnimation ? null : "fade-up"}>
            <Link href={to}>
                <LinkText inverted={inverted}
                          className={`read-more ${className} ${inverted ? "animated-link-light" : (darkmode ? "animated-link-light" : "animated-link-dark")} `}>
                    {i18n.t(text)}
                </LinkText>
            </Link>
        </Animation>
    )

}

export default ReadMore
