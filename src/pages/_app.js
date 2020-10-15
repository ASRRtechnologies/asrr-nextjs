import React, { useEffect, useState } from 'react'import '../styles/App/App.scss'import {AnimatePresence, motion} from 'framer-motion'import AnimationContextProvider from '../context/animations/AnimationContext'import MouseContextProvider from '../context/animations/MouseContext'import { ThemeProvider } from '../context/theme/ThemeContext'import Overlay from '../components/animation/Overlay'import styled from '@emotion/styled'import Cursor from '@/scrollers/Cursor'import I18n from '../context/lib/i18n'import { toast, ToastContainer } from 'react-toastify'import Head from 'next/head'import Header from "@/header/Header";import ScrollUp from '@/scrollers/ScrollUp'import {useScreenResized} from "../hooks/helper-functions";const GlobalStyle = styled('div')`              h1, h2, h3 {color: ${props => props.theme.fonts.header}}              h4, h5 {color: ${props => props.theme.fonts.subHeader}}              li, p, a{color:${props => props.theme.fonts.paragraph}}              background:${props => props.theme.layout}              `;const StyledToast = styled(ToastContainer)`            .message-container{                        background-color: ${props => props.theme.alert.background};            }`;function MyApp({Component, pageProps, router}) {    const [loadAnimation, setAnimation] = useState(false);    const [stopTransitions, setStopTransition] = useState(false);    const screenResized = useScreenResized();    useEffect(() => setAnimation(true));    //Disable screen transitions when resizing    useEffect(() => {        setStopTransition(screenResized);    }, );    return (        <ThemeProvider>            <AnimationContextProvider>            <Head>                <meta name="Description" content="ASRR creates innovative and art of the state software development"/>                <title>ASRR</title>             </Head>                <MouseContextProvider>                    <I18n lngDict={pageProps.lngDict} locale={pageProps.lng}>						<StyledToast limit={3} position={toast.POSITION.TOP_CENTER} closeButton={false}									 draggablePercent={60} hideProgressBar={false}/>                        <GlobalStyle>                            <Cursor/>                            <Header className={stopTransitions ? "no-transitions" : ""} />                            <ScrollUp/>                            <Overlay loadAnimation={loadAnimation}/>                            <AnimatePresence exitBeforeEnter>                                <Component {...pageProps} key={router.route}/>                            </AnimatePresence>                        </GlobalStyle>                    </I18n>                </MouseContextProvider>            </AnimationContextProvider>        </ThemeProvider>    )}export default MyApp