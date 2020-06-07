import React, { useContext, useEffect, useState } from 'react'
import { MouseContext } from '../../context/animations/MouseContext'

function Cursor () {
	const mouseRef = React.useRef()
	const [cursor, setCursor] = useState('cursor');
	const mouse = useContext(MouseContext);

	useEffect(() => {
		console.log(mouse);
		document.addEventListener('mousemove', e => {
				//Change style via ref instead of setting style property with state to limit rerender otherwise it will be laggy.
				mouseRef.current.style.left = `${e.clientX}px`
				mouseRef.current.style.top = `${e.clientY}px`
			})
			document.addEventListener('mousedown', e => {
				setCursor({ cursor: 'cursor active' })
			})
			document.addEventListener('mouseup', e => {
				setCursor({ cursor: 'cursor' })
			})
		},
	)
	return (
		<div ref={mouseRef} className={`${cursor} ${mouse.mouse}`}>

		</div>
	)
}

export default Cursor
