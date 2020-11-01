import React from 'react'
import { clients } from '../../data/clients'
import styled from '@emotion/styled'
import Title from '@/titles/Title'
import Section from '@/layout/Section'
import Animation from '@/animation/Animation'
import Ticker from 'react-ticker'
import Fade from "react-reveal";

const Wrapper = styled('section')`
         svg{fill: ${props => props.theme.fonts.header} !important;}
`;

const Card = ({ children }) => {
	return (
		<div className="client-card">
			{children}
		</div>
	)
};

function Clients (props) {
	return (
		<Section>
			<Fade animation="fade-up" delay="200">
				<Title title={'clients.title.header'}/>
				<Wrapper className="clients">
					<Ticker speed={2} mode="chain">
						{({ index }) => (
							clients.map((d, i) => <Card key={index + "client-logo"} children={d.logo}/>)
						)}
					</Ticker>
				</Wrapper>
			</Fade>
		</Section>

	)
}

export default Clients
