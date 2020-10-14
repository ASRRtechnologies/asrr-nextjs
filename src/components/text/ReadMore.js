import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'
import { useTheme } from '../../context/theme/ThemeContext'

const LinkText = styled('a')`
          color: ${props => props.inverted ? props.theme.fonts.white : props.theme.fonts.title} ;
        &:before{
          background-color: ${props => props.inverted ? props.theme.fonts.white : props.theme.fonts.title} ;
        }
`;

function ReadMore({to, inverted, text, action, margin, children, small, center, className, ...rest}) {
    const darkmode = useTheme().dark;
    return (
        <Link href={to}>
            <LinkText center={center} inverted={inverted}
                      className={`read-more ${className} ${inverted ? "animated-link-light" : (darkmode ? "animated-link-light" : "animated-link-dark")} ${center  && "center"}`}>
                {children}
            </LinkText>
        </Link>
    )
}

export default ReadMore
