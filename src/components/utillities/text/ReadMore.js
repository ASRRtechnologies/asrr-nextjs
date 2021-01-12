import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'
import { useTheme } from '../../../context/theme/ThemeContext'
import Fade from 'react-reveal/Fade'

const LinkText = styled('a')`
         color: ${props => props.inverted ? props.theme.fonts.white : props.theme.fonts.title} ;
        &:before{
          background-color: ${props => props.inverted ? props.theme.fonts.white : props.theme.fonts.title} ;
        }
`

function ReadMore ({ to, inverted, text, children, noAnimation, className, ...rest }) {
	const darkmode = useTheme().dark

	return (
		<Fade fraction={0.4} damping={0.3} triggerOnce direction="up">
			<Link href={to}>
				<LinkText className={`font-header read-more ${className} ${darkmode
					? 'animated-link-light'
					: 'animated-link-dark'}`}>
					{text}
				</LinkText>
			</Link>
		</Fade>
	)

}

export default ReadMore
