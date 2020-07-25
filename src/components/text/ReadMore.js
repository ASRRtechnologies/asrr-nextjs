import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'
import {useTheme} from "../../context/theme/ThemeContext";

const LinkText = styled('a')`
          color: ${props => props.inverted ? props.theme.fonts.white : props.theme.fonts.title} ;
        &:before{
          background-color: ${props => props.inverted ? props.theme.fonts.white : props.theme.fonts.title} ;
        }
`;

const Text = styled('p')`
          color: ${props => props.inverted ? props.theme.fonts.white : props.theme.fonts.title} !important;
        &:before{
          background-color: ${props => props.inverted ? props.theme.fonts.white : props.theme.fonts.title} ;
        }
`;

function ReadMore({to, inverted, text, action, margin, children, small, center, className, ...rest}) {
    const darkmode = useTheme().dark;
    return (

        action ? (
                <>
                    <Text center={center} inverted={inverted} {...rest}
                          className={`${className} ${!darkmode ? "animated-link-dark" : "animated-link-light"} read-more ${small && 'small'} ${center  && "center"} ${margin ? 'margin' : 'no-margin'}`}>
                        {children}
                    </Text>
                </>
            )
            :
            (
                <>
                    <Link href={to}>
                        <LinkText center={center} inverted={inverted}
                                  className={`${className} ${inverted ? "animated-link-light" : (darkmode ? "animated-link-light" : "animated-link-dark")} ${center  && "center"}  read-more ${small && 'small'} ${margin ? 'margin' : 'no-margin'}`}>
                            {children}
                        </LinkText>
                    </Link>
                </>
            )

    )
}

export default ReadMore
