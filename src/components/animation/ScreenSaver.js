import React, { useEffect, useRef, useState } from 'react'
import logo from '../../../public/assets/images/logo/asrr-logo-spacing.svg'
import { useRouter } from 'next/router'
import { useTheme } from '../../context/theme/ThemeContext'
import logoWhite from '../../../public/assets/images/logo/asrr-logo-spacing-white.svg'
import { usePageLeave } from 'react-use'

function ScreenSaver () {

	const [visible, setVisible] = useState(false);

	const darkTheme = useTheme();
	const router = useRouter();
	const overlay = useRef();

	const setOverlayHeight = () => {
		overlay.current.style.height = `${window.innerHeight}px`
	};

	const delayScreenSaver = () => window.setTimeout(() => setVisible(true), 8000);

	const Demo = () => {
		usePageLeave(() => delayScreenSaver());
		return null
	};

	Demo();

	useEffect(() => {
		setOverlayHeight()
	}, []);

	return (
		<div onMouseEnter={() => setVisible(false)} ref={overlay} className={`screen-saver ${visible && 'visible'}`}>
				<img src={ logoWhite} alt="asrr"/>
				<h1>Enter the page to continue</h1>
		</div>
	)
}

export default ScreenSaver
