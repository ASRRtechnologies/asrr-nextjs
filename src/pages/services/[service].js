import React, {useContext, useEffect} from 'react'
import {services} from '../../data/services'
import Section from '@/layout/Section'
import styled from '@emotion/styled'
import useI18n from '../../hooks/use-i18n'
import Title from '@/titles/Title'
import Button from '@/Button'
import Animation from '@/animation/Animation'
import {motion} from "framer-motion";
import Application from "@/layout/Application";
import Layout from "@/layout/Layout";

const Wrapper = styled('div')`
      background-image: ${props => props.theme.layout};
`;

const textEasing = [.42, 0, .58, 1];
const fadeOut = {

    show: {
        opacity: 1,
        transition: {
            ease: textEasing,
            duration: 1
        }
    },
    hidden: {
        translateY: "100px",
        opacity: 0,
        transition: {
            duration: 1,
            ease: textEasing,
        }
    }
};

function Contact({className, title}) {
    return (
        <div className={`contact preview ${title}`}>
            <Title className={`${title} title-button`} title={'contact.preview.title.header'}
                   text={'contact.preview.title.text'}/>
            <Button custom to="/contact" title="buttons.contact"/>
        </div>
    )
}

function Page({data, query}) {
    const i18n = useI18n();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Application>
            <Layout>
                <Section className="service-page individual-service-section">
                    <Animation animation="fade-up" delay="300">
                        <Title title={data.title} className="justify" text={data.text}/>
                    </Animation>
                    {console.log(query, data)}
                    <Animation animation="fade-up" delay="300">
                        <Contact className="last-section-padding"/>
                    </Animation>
                </Section>
            </Layout>
        </Application>
    )
}

Page.getInitialProps = ({query}) => {
    let data = services.find(data => data.id === query.service);

    return {
        data,
        query
    }
};

export default Page

