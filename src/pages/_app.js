import React, { useRef } from 'react'import '../styles/App/App.scss'import AnimationContextProvider from '../context/animations/AnimationContext'import { ThemeProvider } from '../context/theme/ThemeContext'import Overlay from '../components/animation/Overlay'import styled from '@emotion/styled'import I18n from '../context/lib/i18n'import Head from 'next/head'import Header from '@/header/Header'import ScrollUp from '@/scrollers/ScrollUp'import HeaderMobile from '@/header/HeaderMobile'import { SnackbarProvider } from 'notistack'import { HeaderProvider } from '../context/navigation/HeaderContext'import Footer from '@/footer/Footer'import CookieConsent from 'react-cookie-consent'const GlobalStyle = styled('div')`              h1, h2, h3 {color: ${props => props.theme.fonts.header}}              h4, h5 {color: ${props => props.theme.fonts.subHeader}}              li, p, a{color:${props => props.theme.fonts.paragraph}}              background:${props => props.theme.layout}              `function MyApp ({ Component, pageProps, router }) {	const firstUpdate = useRef(true) //Ref used to persist value for overlay animation	return (		<ThemeProvider>			<HeaderProvider>				<AnimationContextProvider>					<Head>						<meta name="Description"							  content="ASRR creates innovative and art of the state software development"/>						<title>ASRR</title>					</Head>					<I18n lngDict={pageProps.lngDict} locale={pageProps.lng}>						<GlobalStyle>							<Header/>							<HeaderMobile/>							<ScrollUp/>							<Overlay loadAnimation={firstUpdate}/>							<SnackbarProvider maxSnack={3}>								<Component {...pageProps} />								<Footer/>							</SnackbarProvider>						</GlobalStyle>					</I18n>					<CookieConsent buttonText="Accepteer cookies">						<div className="cookie-banner">							<p>Deze website maakt gebruik van anonieme cookies voor statistische doeleinden, namelijk om								meer								informatie te krijgen over het algemeen gebruik van de website. Meer info kunt u vinden								in								onze <a href="/assets/documents/privacy-asrr.pdf" target="_blank"										rel="noopener noreferrer">									privacybeleid.								</a>							</p>						</div>					</CookieConsent>				</AnimationContextProvider>			</HeaderProvider>		</ThemeProvider>	)}export default MyApp