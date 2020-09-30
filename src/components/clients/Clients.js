import React from 'react'
import { clients } from '../../data/clients'
import styled from '@emotion/styled'
import Title from '@/text/Title'
import Section from '@/layout/Section'
import Animation from '@/animation/Animation'
import Ticker from 'react-ticker'

const Wrapper = styled('section')`
        // background-color: ${props => props.theme.home.clients}; 
        svg{
          path{
            fill:  ${props => props.theme.fonts.title}
          }
        }
`

const ClientCard = ({children}) => {
	return(
		<div className="client-card">
			{children}
		</div>
	)
}

function Clients (props) {
	return (
		<Animation animation="fade-up" delay="200">
			<Section containerClassName="client-section">
				<Title className="no-margin" title={'clients.title.header'}/>
				<Wrapper className="clients">
					<Ticker speed={2} mode="chain">
						{({ index }) => (
							clients.map((d, i) => <ClientCard children={d.logo}/> )
						)}
					</Ticker>
				</Wrapper>
			</Section>
		</Animation>
	)
}

export default Clients
