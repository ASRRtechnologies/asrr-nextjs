import React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import useI18n from '../../hooks/use-i18n'

const Wrapper = styled('div')`
        background-color: ${props => props.theme.button.background};
        box-shadow: ${props => props.theme.button.shadow};
        p, a{color: ${props => props.theme.button.font}} !important;
        &:hover{background-color: ${props => props.theme.button.hover};}
        `

function NavigationButton ({ className, title, to, custom, ...props }) {
	const i18n = useI18n()
	return (
		<>
			<Wrapper {...props} className={`button ${className}`}>
				<Link href={to}><a>{title}</a></Link>
			</Wrapper>
		</>
	)
}

export default NavigationButton
