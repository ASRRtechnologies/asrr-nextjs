import React, { useContext, useState } from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'
import { MouseContext } from '../../context/animations/MouseContext'

const LinkText = styled('a')`
          color: ${props => props.inverted ? props.theme.fonts.white : props.theme.fonts.title} ;
        &:after{
          background-color: ${props => props.inverted ? props.theme.fonts.white : props.theme.fonts.title} ;
        }
`

const Text = styled('p')`
          color: ${props => props.inverted ? props.theme.fonts.white : props.theme.fonts.title} !important;
        &:after{
          background-color: ${props => props.inverted ? props.theme.fonts.white : props.theme.fonts.title} ;
        }
`

function ReadMore ({ to, inverted, text, action, margin, children, small, ...rest }) {

	const mouse = useContext(MouseContext)

	const hoverText = () => {
		setTextBorder(true)
		mouse.onHover('disabled')
	}

	const leaveText = () => {
		setTextBorder(false)
		mouse.onLeave()
	}

	const [textBorder, setTextBorder] = useState(false)

	return (

		action ? (
				<Text inverted={inverted} {...rest} onMouseOver={() => {hoverText()}} onMouseLeave={() => {leaveText()}}
					  className={`read-more ${margin ? 'margin' : 'no-margin'} ${small && 'small'} ${textBorder &&
					  'border'}`}>
					{children}
				</Text>)
			:
			(
				<Link href={to}>
					<LinkText inverted={inverted}  onMouseOver={() => {hoverText()}} onMouseLeave={() => {leaveText()}}
							  className={`read-more ${margin && 'margin'} ${small && 'small'} ${textBorder &&
							  'border'}`}>
						{children}
					</LinkText>
				</Link>)

	)
}

export default ReadMore
