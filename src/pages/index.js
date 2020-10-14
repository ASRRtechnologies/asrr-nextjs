import React from 'react'
import HomeLanding from '@/landing/HomeLanding'
import PortfolioPreview from '../components/portfolio/Preview'
import ServicePreview from '../components/services/Preview'
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
                <ServicePreview/>
                <PortfolioPreview/>
                <Stories/>
                <Why/>
                <Blog/>
                <Contact/>
                <Clients/>
            </Layout>
        </Application>

    )
}

export default Index
