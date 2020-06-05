import React from 'react';
import Link from "next/link";
import styled from '@emotion/styled'

const LinkText = styled('a')`
        &:after{
          background-color: ${props => props.theme.fonts.title} ;
        }
`;

const Text = styled('p')`
          color: ${props => props.theme.fonts.title}!important;
        &:after{
          background-color: ${props => props.theme.fonts.title} ;
        }
`;



function ReadMore({to, text, action, margin, children, small, ...rest}) {
    return (

        action ? (<Text {...rest} className={`read-more no-margin ${small && "small"}`}>
                {text}
                {children}
            </Text>)
            :
            (
                <Link href={to}>
                    <LinkText className={`read-more ${margin && "margin"} ${small && "small"}`}>
                        {text}
                        {children}
                    </LinkText>
                </Link>)

    );
}

export default ReadMore;
