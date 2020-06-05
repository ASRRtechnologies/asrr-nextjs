import React from 'react'
import App from 'next/app'
import '../styles/App/App.scss'
import {AnimatePresence} from 'framer-motion'
import Header from '../components/header/Header'
import AnimationContextProvider from '../context/animations/AnimationContext'
import {ThemeProvider} from '../context/theme/ThemeContext'
import Overlay from '../components/animation/Overlay'
import styled from '@emotion/styled'
import ScreenSaver from '../components/animation/ScreenSaver'
import Footer from "@/footer/Footer";

const GlobalColor = styled('div')`
        h1, h2, h3, h4, h5, a {color:  ${props => props.theme.fonts.title};}
        p{color:  ${props => props.theme.fonts.text};}
        `;

class MyApp extends App {
	render() {
		const {Component, pageProps, router} = this.props;

		return (
			<ThemeProvider>
				<GlobalColor>
					<AnimationContextProvider>
						<Header/>
						{/*<Cursor/>*/}
						{/*<ScreenSaver/>*/}
						<Overlay/>
						<AnimatePresence exitBeforeEnter>
							<Component {...pageProps} key={router.route}/>
						</AnimatePresence>
						<Footer/>
					</AnimationContextProvider>
				</GlobalColor>
			</ThemeProvider>
		)
	}
}

export default MyApp