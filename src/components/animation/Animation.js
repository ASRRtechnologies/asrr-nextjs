import React, {useEffect} from 'react'
import AOS from 'aos';

function Animation ({delay, animation, children, className, ...props}) {

	return (
		<div data-aos={animation ? animation : ""} className={`${className ? className : ""}`} data-aos-delay={delay ? delay : "100"}
			 data-aos-anchor-placement="top-bottom" {...props}>
			{children}
		</div>
	)
}

export default Animation
