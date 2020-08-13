import React, { useContext, useEffect } from 'react'
import { AnimationContext } from '../context/animations/AnimationContext'
import Layout from '../components/layout/Layout'
import imageDark  from '../../public/assets/images/landing/contact/phone-dark.png'
import Landing from '@/landing/PageLanding'
import ContactPage from '../components/contact/Contact'
import useI18n from '../hooks/use-i18n'
import imageLight from '../../public/assets/images/landing/contact/phone-light.png'
import { useTheme } from '../context/theme/ThemeContext'

function Contact() {
    const i18n = useI18n();
    const animate = useContext(AnimationContext);
    const darkmode = useTheme().dark

    useEffect(() => {(animate.appLoaded) ? animate.animation.secondLoad() : null;}, []);
    return (
        <div className="content-wrapper">
            <Landing title="contact.landing.title" text="contact.landing.text" image={darkmode ? imageDark : imageLight} imageClass="floating-mobile"/>
            <Layout>
                <ContactPage big={true}/>
            </Layout>
        </div>
    )
}
export default Contact
