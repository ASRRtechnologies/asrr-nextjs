import Section from "@/layout/Section";
import Fade from 'react-reveal/Fade';
import useI18n from "../../hooks/use-i18n";
import Title from "@/utillities/titles/Title";
import React from "react";
import styled from "@emotion/styled";
import TestimonialCards from '@/testimonials/TestimonialCard'
import ServiceCards from '@/utillities/cards/ServiceCards'

const clients = ['form', 'esp', 'nwo'];

const Wrapper = styled(Section)`
        background: ${props => props.theme.home.stories};
 }`;

function Preview({data}) {
	const basePath = "stories";
	let i18n = useI18n();

	console.log(data);

	return (
		<Wrapper>

			<Title title={data.title} header={data.header} subHeader={data.subheader}/>

			<div className="cards-container">
				<Fade cascade delay={200} duration={500} fraction={0.3} triggerOnce>
					{data.cards.map((data) =><TestimonialCards data={data} basePath={basePath}/>)}
				</Fade>
			</div>

		</Wrapper>
	);
}

export default Preview;
