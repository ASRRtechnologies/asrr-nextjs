import React from 'react';
import Link from "next/link";
import styled from '@emotion/styled'

const LinkText = styled('a')`
          color: ${props => props.inverted ? props.theme.fonts.white : props.theme.fonts.title} ;
        &:after{
          background-color: ${props => props.inverted ? props.theme.fonts.white : props.theme.fonts.title} ;
        }
`;

const Text = styled('p')`
          color: ${props => props.inverted ? props.theme.fonts.white : props.theme.fonts.title} ;
        &:after{
          background-color: ${props => props.inverted ? props.theme.fonts.white : props.theme.fonts.title} ;
        }
`;


function ReadMore({to, inverted, text, action, margin, children, small, ...rest}) {
    return (

        action ? (<Text inverted={inverted} {...rest} className={`read-more no-margin ${small && "small"}`}>
                {text}
                {children}
            </Text>)
            :
            (
                <Link href={to}>
                    <LinkText inverted={inverted} className={`read-more ${margin && "margin"} ${small && "small"}`}>
                        {text}
                        {children}
                    </LinkText>
                </Link>)

    );
}

export default ReadMore;
