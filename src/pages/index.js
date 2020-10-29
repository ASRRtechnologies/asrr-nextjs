import React from 'react'
import BigLanding from '@/landing/BigLanding'
import image from '../../public/assets/images/landing/drone-2.jpg'
import Clients from '../components/clients/Clients'
import Contact from '../components/contact/Preview'
import Stories from '@/stories/Stories'
import Why from '@/why-asrr/Why'
import Application from '../components/layout/Application'
import Blog from '@/blog/Blog'
import PreviewServices from "@/services/Preview";
import PreviewPortfolio from "@/portfolio/Preview";

function Index(props) {

    return (
        <Application>
            <BigLanding title={'home.landing.title'} text={'home.landing.text'} image={image}/>
            <PreviewServices/>
            <PreviewPortfolio/>
            {/*<Stories/>*/}
            {/*<Why/>*/}
            {/*<Blog preview={true}/>*/}
            {/*<Contact/>*/}
            {/*<Clients/>*/}
        </Application>

    )
}

export default Index
