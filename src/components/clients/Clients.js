import React from 'react'
import {clients} from '../../data/clients'
import styled from '@emotion/styled'
import Title from '@/utillities/titles/Title'
import Section from '@/layout/Section'
import Ticker from 'react-ticker'
import { Fade } from 'react-awesome-reveal'
import uuid from 'react-uuid'

const Wrapper = styled(Section)`
        background: ${props => props.theme.home.clients};
         svg{fill: ${props => props.theme.fonts.header} !important;}
`;

const Card = ({ children }) => {
	return (
		<div className="client-card">
			{children}
		</div>
	)
};

function Clients ({data}) {
	return (
		<Wrapper className="clients-section">
 				<Title title={data.title} header={data.header} subHeader={data.subheader}/>
			<Fade fraction={0.4} damping={0.3} triggerOnce direction="up">
			<div className="clients">
					<Ticker speed={2} mode="chain">
						{({ index }) => (clients.map((d, i) => <Card key={uuid()} children={d.logo}/>))}
					</Ticker>
				</div>
			</Fade>
 		</Wrapper>

	)
}

export default Clients
