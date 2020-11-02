import React, { useState } from 'react'
import useI18n from '../../hooks/use-i18n'
import Section from '@/layout/Section'
import { useTheme } from '../../context/theme/ThemeContext'
import Title from '@/titles/Title'
import Fade from "react-reveal";
import styled from "@emotion/styled";

const Wrapper = styled(Section)`
        background: ${props => props.theme.home.values};
 }`;

function Why() {
	const [card, setCard] = useState(0);
	const i18n = useI18n();
	const values = ["modular", "flexible", "easy", "compatibility", "insights"];
	const darkmode = useTheme().dark;

	return (
		<Wrapper>
			<Fade bottom>
			<Title basePath={'why.header'} compact noSection/>
			<div className="why-asrr">
				<div className="why-asrr-points why-asrr-center">
					{values.map((d, i) => <span onClick={() => setCard(i)}
					                            className={`${i === card && "selected-line"}`}><p
						className={`small-header ${!darkmode ? "animated-link-dark" : "animated-link-light"}`}>{i18n.t('home.why.' + i + '.title')}</p></span>)}
				</div>
				<div className="why-asrr-text why-asrr-center">
					<p className="text">{i18n.t('home.why.' + card + '.text')}</p>
				</div>
			</div>
			</Fade>
		</Wrapper>
	)
}

export default Why


