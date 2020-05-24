import React from 'react';
import Link from "next/link";
import styled from '@emotion/styled'

const LinkText = styled('a')`
        &:after{
          background-color: ${props => props.theme.fonts.text} ;
        }
`;

const Text = styled('p')`
        &:after{
          background-color: ${props => props.theme.fonts.text} ;
        }
`;



function ReadMore({to, text, action, margin, ...rest}) {
    return (

        action ? (<Text {...rest} className="read-more no-margin">
                {text}
            </Text>)
            :
            (
                <Link href={to}>
                    <LinkText className={`read-more ${margin && "margin"}`}>
                        {text}
                    </LinkText>
                </Link>)

    );
}

export default ReadMore;
