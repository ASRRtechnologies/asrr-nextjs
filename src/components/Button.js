import React from 'react'
import styled from '@emotion/styled'
import Link from "next/link";
import useI18n from "../hooks/use-i18n";

const Wrapper = styled('div')`
        background-color: ${props => props.theme.button.background};
        box-shadow: ${props => props.theme.button.shadow};
        p, a{
        	color: ${props => props.theme.button.font}
        }
        
        &:hover{
                background-color: ${props => props.theme.button.hover};
        }
        
        `;

function Button ({className, title, to, custom, ...props }) {
	const i18n = useI18n();

	return (
		<>
			{custom ? (
				<Wrapper {...props} className={`button ${className}`} >
					{to.length > 0 ? (<Link href={to}><a>{i18n.t(title)}</a></Link>) : (
						<p>{i18n.t(title)}</p>
					)}
				</Wrapper>)
				:
				(<button {...props}>{i18n.t(title)}</button>)
			}
		</>
	)
}

export default Button
