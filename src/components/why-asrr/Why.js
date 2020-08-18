import React, {useState} from 'react'
import useI18n from '../../hooks/use-i18n'
import Section from "@/layout/Section";
import styled from "@emotion/styled";
import {useTheme} from "../../context/theme/ThemeContext";
import ReadMore from "@/text/ReadMore";
import Title from "@/text/Title";
import Email from "@/icons/Email";
import Button from "@/Button";

function Why() {
	const [card, setCard] = useState(0);
	const i18n = useI18n();
	const values = ["Cheap", "Fast", "Agile"];
	const darkmode = useTheme().dark;

	return (
		<Section>
			<Title title={'why.title.header'}/>
			<div className="why-asrr">
				<div className="why-asrr-points why-asrr-center">
					{values.map((d, i) => <span onClick={() => setCard(i)}
					                            className={`${i === card && "selected-line"}`}><p
						className={`${!darkmode ? "animated-link-dark" : "animated-link-light"}`}>{i18n.t('home.why.' + i + '.title')}</p></span>)}
				</div>

				<div className="why-asrr-text why-asrr-center">
					<p>{i18n.t('home.why.' + card + '.text')}</p>
				</div>
			</div>
		</Section>
	)
}

export default Why


