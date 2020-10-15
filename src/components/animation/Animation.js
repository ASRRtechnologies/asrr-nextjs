import React, {useEffect} from 'react'
import AOS from 'aos';

function Animation ({delay, animation, children, className, ...props}) {

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
		<div  data-aos={animation} className={`${className}`} data-aos-delay={delay} data-aos-anchor-placement="top-bottom" {...props}>
			{children}
		</div>
	)
}

export default Animation
