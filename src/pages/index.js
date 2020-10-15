import React from 'react'
import HomeLanding from '@/landing/HomeLanding'
import Portfolio from '../components/portfolio/Portfolio'
import Services from '../components/services/Services'
import image from '../../public/assets/images/landing/drone-2.jpg'
import Clients from '../components/clients/Clients'
import Contact from '../components/contact/Preview'
import Stories from '@/stories/Stories'
import Why from '@/why-asrr/Why'
import Layout from '../components/layout/Layout'
import Application from '../components/layout/Application'
import Blog from '@/blog/Blog'

function Index(props) {

    return (
        <Application>
            <HomeLanding title={'home.landing.title'} text={'home.landing.text'} image={image}/>
            <Layout>
                <Services id="services" preview={true}/>
                <Portfolio preview={true}/>
                <Stories/>
                <Why/>
                <Blog preview={true}/>
                <Contact/>
                <Clients/>
            </Layout>
        </Application>

    )
}

export default Index
