import React, {useEffect} from 'react'
import AOS from 'aos';

function Animation ({delay, animation, children, className}) {

	useEffect(() => {
		AOS.init({
			offset: 200,
			duration: 600,
			easing: 'ease-in-sine',
			delay: 100,
			once:true
		});

	});

	return (
		<div data-aos={animation} className={`section-animation ${className}`} data-aos-delay={delay} data-aos-anchor-placement="top-bottom">
			{children}
		</div>
	)
}

export default Animation
