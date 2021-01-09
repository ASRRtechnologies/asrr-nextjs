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
    const darkmode = useTheme().dark;

    return (
            <Link href={to}>
                <LinkText className={`font-header read-more ${darkmode ? "animated-link-light" : "animated-link-dark"}`}>
                    {text}
                </LinkText>
            </Link>
    )

}

export default ReadMore
