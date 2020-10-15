import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'
import { useTheme } from '../../context/theme/ThemeContext'
import useI18n from "../../hooks/use-i18n";

const LinkText = styled('a')`
          color: ${props => props.inverted ? props.theme.fonts.white : props.theme.fonts.title} ;
        &:before{
          background-color: ${props => props.inverted ? props.theme.fonts.white : props.theme.fonts.title} ;
        }
`;

function ReadMore({to, inverted, text, action, margin, children, small, center, className, ...rest}) {
    const i18n = useI18n();
    const darkmode = useTheme().dark;
    return (
        <Link href={to}>
            <LinkText center={center} inverted={inverted}
                      className={`read-more ${className} ${inverted ? "animated-link-light" : (darkmode ? "animated-link-light" : "animated-link-dark")} ${center  && "center"}`}>
                <a>{i18n.t(text)}</a>
            </LinkText>
        </Link>
    )
}

export default ReadMore
