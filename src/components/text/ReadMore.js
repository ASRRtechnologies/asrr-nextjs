import React, {useContext, useState} from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'
import {MouseContext} from '../../context/animations/MouseContext'

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

function ReadMore({to, inverted, text, action, margin, children, small, ...rest}) {

    const mouse = useContext(MouseContext)

    const hoverText = () => {
        setTextBorder(true)
        mouse.onHover('big')
    };

    const leaveText = () => {
        setTextBorder(false);
        mouse.onLeave()
    };

    const [textBorder, setTextBorder] = useState(false)

    return (

        action ? (
                <>
                    <Text inverted={inverted} {...rest}
                          onMouseOver={() => {
                              hoverText()
                          }}
                          onMouseLeave={() => {
                              leaveText()
                          }}
                          className={`read-more ${small && 'small'} ${margin ? 'margin' : 'no-margin'}`}>
                        {children}
                    </Text>
                </>
            )
            :
            (
                <>
                    <Link href={to}>
                        <LinkText inverted={inverted}
                                  onMouseOver={() => {
                                      hoverText()
                                  }}
                                  onMouseLeave={() => {
                                      leaveText()
                                  }}
                                  className={`read-more ${small && 'small'} ${margin ? 'margin' : 'no-margin'}`}>
                            {children}
                        </LinkText>
                    </Link>
                    {/*<span className="line-left"></span>*/}
                    {/*<span className="line-right"></span>*/}
                </>
            )

    )
}

export default ReadMore
