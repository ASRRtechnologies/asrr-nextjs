import React from 'react'
import styled from '@emotion/styled'
import Link from "next/link";

const Wrapper = styled('div')`
        background-color: ${props => props.theme.button.background};
        box-shadow: ${props => props.theme.card.shadow};
        p, a{
        	color: ${props => props.theme.button.font}
        }
        `

function Button ({ children, className, title, to, navigation, custom, ...props }) {
	return (
		<>
			{custom ? (
				<Wrapper className={`button ${className}`} {...props}>
					{to.length > 0 ? (<Link href={to}><a>{title}</a></Link>) : (
						<p>{title}</p>
					)}
				</Wrapper>)
				:
				(<button {...props}>{title}</button>)
			}
		</>
	)
}

export default Button
