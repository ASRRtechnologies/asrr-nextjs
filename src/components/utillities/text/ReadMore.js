import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'
import {useTheme} from '../../../context/theme/ThemeContext'
import useI18n from "../../../hooks/use-i18n";
import Fade from "react-reveal/Fade";

const LinkText = styled('a')`
         color: ${props => props.inverted ? props.theme.fonts.white : props.theme.fonts.title} ;
        &:before{
          background-color: ${props => props.inverted ? props.theme.fonts.white : props.theme.fonts.title} ;
        }
`;

function ReadMore({to, inverted, text, children, noAnimation, className, ...rest}) {
    const i18n = useI18n();
    const darkmode = useTheme().dark;

    const NoAnimation = (props) => {

        return (
            <>
                {noAnimation ? (props.children) : (
                    <Fade delay={400} bottom>
                        {props.children}
                    </Fade>
                )}
            </>
        )
    };

    return (
        <NoAnimation>
            <Link href={to}>
                <LinkText inverted={inverted}
                          className={`font-card-title read-more ${className} ${inverted ? "animated-link-light" : (darkmode ? "animated-link-light" : "animated-link-dark")} `}>
                    {text}
                </LinkText>
            </Link>
        </NoAnimation>
    )

}

export default ReadMore
