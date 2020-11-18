import Section from "@/layout/Section";
import Fade from 'react-reveal/Fade';
import useI18n from "../../hooks/use-i18n";
import Title from "@/titles/Title";
import React from "react";
import styled from "@emotion/styled";

const clients = ['form', 'esp', 'nwo'];

const Wrapper = styled(Section)`
        background: ${props => props.theme.home.stories};
 }`;

function Preview(props) {
	const basePath = "stories";
	let i18n = useI18n();
	return (
		<Wrapper>
			<Title basePath={basePath + ".header"}/>
			<div className="testimonials">
				{clients.map((client, i) => {
					let {id} = client;
					return (
						<Fade delay={200} bottom>
							<div className="testimonial-card card-margin-bottom">
								<span className="testimonial-card-image">
                					<img src={i18n.t("home.stories." + client + ".picture")}/>
            					</span>
								<h1 className="small-header">{i18n.t("home.stories." + client + ".contact")}</h1>
								<h2 className="label-small-margin">{i18n.t("home.stories." + client + ".function")}</h2>
								<p className="text">"{i18n.t("home.stories." + client + ".story")}"</p>
								<h3 className="label-small-margin no-margin">{i18n.t("home.stories." + client + ".name")}</h3>
							</div>
						</Fade>
					)
				})}
			</div>

		</Wrapper>
	);
}

export default Preview;
