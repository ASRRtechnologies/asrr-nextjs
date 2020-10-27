import React, {useEffect, useState} from 'react'
import Section from '../layout/Section'
import Card from './Card'
import Title from '../text/Title'
import {services} from '../../data/services'
import Contact from '@/contact/Preview'
import ReadMore from "@/text/ReadMore";

function Services ({preview}) {
	const [servicesPreview, setServicesPreview] = useState([]);

	useEffect(() => {
		if (preview) setServicesPreview(services.slice(0, 3));
		else setServicesPreview(services);
	}, [preview]);

	return (
		<Section id="services">
				<Title title={'services.header.title'}/>
				<div className={`services ${preview ? "margin-bottom" : ""}`}>
					{
						servicesPreview.map((d) => {
								return (
										<Card title={d.preview_title} text={d.preview_text} icon={d.icon}
											  to={`services/${d.id}`}/>
								)
							},
						)}
				</div>

 			{preview && <ReadMore className="read-more-big" to="/services" text="buttons.services"/>}
			{preview ? null : <Contact className="section-contact-form"/>}
		</Section>
	)
}
export default Services
