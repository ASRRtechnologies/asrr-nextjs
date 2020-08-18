import React, {useContext, useEffect} from 'react'
import {AnimationContext} from '../context/animations/AnimationContext'
import ServicePage from '../components/services/Services'
import useI18n from '../hooks/use-i18n'
import Landing from '@/landing/PageLanding'
import imageDark from '../../public/assets/images/landing/contact/phone-dark.png'
import imageLight from '../../public/assets/images/landing/contact/phone-light.png'
import {useTheme} from "../context/theme/ThemeContext";

function Services(props) {
	const darkmode = useTheme().dark
	const animate = useContext(AnimationContext);
	useEffect(() => {
		(animate.appLoaded) ? animate.animation.secondLoad() : null
	}, []);

	return (
		<div className="content-wrapper">
			<Landing title="services.landing.title" text="services.landing.text"
			         image={darkmode ? imageDark : imageLight} imageClass="floating-mobile"/>
			<ServicePage/>
		</div>
	)
}

export default Services
