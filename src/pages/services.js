import React, { useContext, useEffect } from 'react'
import Landing from '../components/landing/Landing'
import { AnimationContext } from '../context/animations/AnimationContext'
import Layout from '../components/layout/Layout'
import ServicePage from '../components/services/Services'
import image from '../../public/assets/images/landing/laptop.jpg'
import ContactPreview from '../components/contact/Preview'
import useI18n from '../hooks/use-i18n'
import Title from "@/text/Title";

function Services (props) {

	const i18n = useI18n();
	const animate = useContext(AnimationContext);
	useEffect(() => {(animate.appLoaded) ? animate.animation.secondLoad() : null}, []);

	return (
		<div className="content-wrapper">
			<Landing title={i18n.t('services.landing.title')} text={i18n.t('services.landing.text')} image={image}/>
			<Layout>
				<ServicePage/>
				<ContactPreview/>
			</Layout>
		</div>
	)
}

export default Services
