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
				<div onMouseOver={() => {hoverText()}} onMouseLeave={() => {leaveText()}}
					 className={`read-more-wrapper ${margin ? 'margin' : 'no-margin'}`}>
					<Text inverted={inverted} {...rest}
						  className={`read-more ${small && 'small'}`}>
						{children}
					</Text>
					<span className="line-left"></span>
					<span className="line-right"></span>
				</div>
			)
			:
			(
				<div onMouseOver={() => {hoverText()}} onMouseLeave={() => {leaveText()}}
					 className={`read-more-wrapper ${margin ? 'margin' : 'no-margin'}`}>
					<Link href={to}>
						<LinkText inverted={inverted} onMouseOver={() => {hoverText()}}
								  onMouseLeave={() => {leaveText()}}
								  className={`read-more ${small && 'small'}`}>
							{children}
						</LinkText>
					</Link>
					<span className="line-left"></span>
					<span className="line-right"></span>
				</div>
			)

	)
}

export default ReadMore
